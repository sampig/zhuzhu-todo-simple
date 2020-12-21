import React from 'react'
import renderer from 'react-test-renderer'
import TodoDetail from './TodoDetail'


describe('The TodoDetail component', () => {
  it('renders without crashing', () => {
    const route = { params: { todoItem: { id: 'testId', title: 'test title', createTime: 1 } } }
    const render = renderer.create(<TodoDetail route={route} />).toJSON()
    expect(render).toMatchSnapshot()
  })

  it('return null when no item in route', () => {
    const route = { params: {} }
    const render = renderer.create(<TodoDetail route={route} />).toJSON()
    expect(render).toMatchSnapshot()
  })
})
