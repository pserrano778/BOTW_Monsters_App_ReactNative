const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const uri = ''; // Set url with auth

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let monstersCollection;
const app = express();

// configure the app to to use json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

const port = 4000;

// Connect to DB
const connectDB = client.connect((err) => {
  monstersCollection = client.db('BOTW_Monsters_App').collection('monsters');
});

// Check if the server is connected to the DB
const checkDBConnection = () => {
  // If the server is not connected, connect to DB
  if (!client && !client.topology && !client.topology.isConnected()) {
    connectDB();
  }
};

// Add monster Endpoint
app.post('/addMonster', (req, res) => {
  let drops;
  if (req.body.drops === '') {
    drops = [];
  } else {
    drops = req.body.drops.split(',');
  }

  const newMonster = {
    _id: req.body.name.toLowerCase().replaceAll(" ", "_"),
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    locations: req.body.locations.split(','),
    drops,
  };

  checkDBConnection();

  result = monstersCollection.insertOne((newMonster), (error, result) => {
    if (error) {

      return res.status(500).send(error);
    }
    else{
      return res.status(200).send({name:newMonster.name, image:newMonster.image});
    }
  });
});

// Get all monsters Endpoint
app.get('/getAllMonsters', (req, res) => {
  checkDBConnection();
  monstersCollection.find().toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.status(200).send(result.map(monster => ({name:monster.name, image:monster.image})));
  });
});

// Get monster details Endpoint
app.get('/getMonster/*', (req, res) => {
  const monster = req.url.replace('/getMonster/', '').toLowerCase();
  checkDBConnection();
  monstersCollection.findOne({ _id: monster }, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.status(200).send(result);
  });
});

app.listen(port, () => {});
