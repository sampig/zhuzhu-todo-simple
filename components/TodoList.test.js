import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'

jest.mock('@expo/vector-icons/MaterialIcons', () => 'Icon')
Date.now = jest.fn(() => 7 * 24 * 60 * 60 * 1000 + 10)
const navigation = { navigate: jest.fn() }
jest.mock('hooks/useTodo', () => ({
  __esModule: true,
  default: () => ({
    todos: [
      { id: 'testId1', title: 'test title 1', createTime: 1 },
      { id: 'testId2', title: 'test title 2', createTime: 100 },
      { id: 'testId3', title: 'test title 3', createTime: 6 * 24 * 60 * 60 * 1000 + 10 },
      { id: 'testId4', title: 'test title 4', createTime: 7 * 24 * 60 * 60 * 1000 },
    ],
    addTodo: jest.fn(),
    removeTodo: jest.fn(),
    clearTodos: jest.fn(),
  }),
}))

describe('The TodoList component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<TodoList navigation={navigation} />)
    const render = component.toJSON()
    expect(render).toMatchSnapshot()
  })
})
