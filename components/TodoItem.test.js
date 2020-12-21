import React from 'react'
import renderer from 'react-test-renderer'
import TodoItem from './TodoItem'

jest.mock('@expo/vector-icons/MaterialIcons', () => 'Icon')
const item = { id: 'testId', title: 'test title', createTime: 1 }
const navigation = { navigate: jest.fn() }

describe('The TodoItem component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <TodoItem
        todoItem={item}
        navigation={navigation}
        removeTodo={jest.fn()}
      />
    )
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })
})
