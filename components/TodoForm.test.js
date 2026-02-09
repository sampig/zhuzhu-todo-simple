import React from 'react'
import renderer from 'react-test-renderer'
import { act } from 'react-test-renderer'
import TodoForm from './TodoForm'

describe('The TodoForm component', () => {
  it('renders without crashing', () => {
    let render
    act(() => {
      render = renderer.create(<TodoForm addNewTodo={jest.fn()} />).toJSON()
    })
    expect(render).toMatchSnapshot()
  })
})
