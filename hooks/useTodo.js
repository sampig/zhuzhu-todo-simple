import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Hook for to-do functionality.
 * @returns {object} - Object with a list of to-dos and related functions
 */
const useTodo = () => {
  const storeName = '@TodoListStore:Todos'

  const [todos, setTodos] = useState([])

  /**
   * Load all todos.
   * @returns {function} - operation
   */
  const loadTodos = async () => {
    const data = await AsyncStorage.getItem(storeName)
    if (data) {
      setTodos(JSON.parse(data))
    }
  }

  useEffect(() => {
    if (todos.length) return
    loadTodos()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(storeName, JSON.stringify(todos))
  }, [todos])

  /**
   * Add a to-do item.
   * @param {object} todoItem - a to-do object.
   */
  const addTodo = (todoItem) => {
    const current = Date.now()
    const newTodo = {
      id: current.toString(),
      title: todoItem,
      // createTimeString: (new Date(current)).toISOString(),
      createTime: current,
    }
    setTodos([...todos, newTodo])
  }

  /**
   * Remove a to-do item.
   * @param {string} todoId - the id of to-do item.
   */
  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const clearTodos = useCallback(async () => {
    await AsyncStorage.clear()
    setTodos([])
  }, [])

  return { todos, addTodo, removeTodo, clearTodos }
}

export default useTodo
