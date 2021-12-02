import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import MonstersContainer from '../containers/monsters/monsters.container'
import MonsterDataContainer from '../containers/monsters/monsterData.container'
import AddMonsterContainer from '../containers/monsters/addMonster.container'

const Routing: React.FC = () => {
  // Routing
  return (
      <Router>
        <Stack key="root">
          {/* All monster List route */}
          <Scene key="main" component={MonstersContainer} hideNavBar />
          {/* Specific monster info */}  
          <Scene key="monster" component={MonsterDataContainer} hideNavBar/>
          {/* Add a new monster */}
          <Scene key="addMonster" component={AddMonsterContainer} hideNavBar/>
        </Stack>
      </Router>
  )
}

export default Routing
