import React from 'react'
import renderer from 'react-test-renderer'
import TodoForm from './TodoForm'

describe('The TodoForm component', () => {
  it('renders without crashing', () => {
    const render = renderer.create(<TodoForm addNewTodo={jest.fn()} />).toJSON()
    expect(render).toMatchSnapshot()
  })
})
