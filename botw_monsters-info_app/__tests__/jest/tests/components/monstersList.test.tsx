import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'

import { ReactTestInstance } from 'react-test-renderer'
import { Text, Image, Pressable, TouchableOpacity } from 'react-native'
import '@testing-library/jest-dom/extend-expect'
import MonstersList from '../../../../src/components/monsters/monstersList/monstersList.component'
import MonsterPreview from '../../../../src/components/monsters/monsterPreview/monsterPreview.component'

describe('Test Monsters List Component', () => {
  const monstersInPreview = [
    {
        image: 'test-image1',
        name: 'test-name1'
    },
    {
        image: 'test-image2',
        name: 'test-name2'
    },
    {
        image: 'test-image3',
        name: 'test-name3'
    }
  ]

  let monstersList: ReactTestInstance
  const handlePress = jest.fn((name: string) => {name})

  beforeAll(async () => {
    const result = 
      <MonstersList
        monsters={monstersInPreview}
        handlePress={handlePress}
        testID={'monstersList'}
      />
    

    monstersList = result
  })

  afterAll(() => {
    cleanup()
  })

  test('The monsters list has three monsters', () => {
    const monstersRendered = render(monstersList).getByTestId('monstersList')
    const monsters = monstersRendered.findAllByType(MonsterPreview)
    
    expect(monsters.length).toBe(monstersInPreview.length)

    monsters.forEach((monster, index) => { 
      const [name] = monster.findAllByType(Text)
      expect(name._fiber.child.stateNode.props.children).toEqual('test-name'+(index+1))
      const [image] = monster.findAllByType(Image)
      expect(image._fiber.child.stateNode.props.source.uri).toEqual('test-image'+(index+1))
    });
  })

  test('The monsters Previews has correct data', () => {
    const monstersRendered = render(monstersList).getByTestId('monstersList')
    const monsters = monstersRendered.findAllByType(MonsterPreview)

    monsters.forEach((monster, index) => { 
      const [name] = monster.findAllByType(Text)
      expect(name._fiber.child.stateNode.props.children).toEqual('test-name'+(index+1))
      const [image] = monster.findAllByType(Image)
      expect(image._fiber.child.stateNode.props.source.uri).toEqual('test-image'+(index+1))
    });
  })

  test('Press monster preview', () => {
    const monstersRendered = render(monstersList).getByTestId('monstersList')
    const monsters = monstersRendered.findAllByType(MonsterPreview)

    fireEvent.press(monsters[1].findAllByType(TouchableOpacity)[0])
    expect(handlePress).toBeCalledWith("test-name2")
  })
})