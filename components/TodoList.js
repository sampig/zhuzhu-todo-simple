import React from 'react'
import { Alert, Button, FlatList, Platform, StyleSheet, View } from 'react-native'
import i18n from 'util/i18n-utils'
import useTodo from 'hooks/useTodo'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const styles = StyleSheet.create({
  containerButtons: {
    padding: 5,
  },
  containerList: {
    flex: 1,
    display: 'flex',
  },
})

/**
 * Component to display the list of to-dos.
 * @param {object} navigation - the navigation object in route.
 * @returns {node}            - React node
 * @constructor
 */
function TodoList ({ navigation }) {
  const { todos, addTodo, removeTodo, clearTodos } = useTodo()

  /**
   * Delete all to-dos.
   */
  const clearAllTodos = () => {
    if (Platform.OS === 'web') {
      /*global confirm*/
      if (confirm(i18n.t('clearAllText'))) {
        clearTodos()
      }
    } else {
      Alert.alert(
        i18n.t('clearAllTitle'),
        i18n.t('clearAllText'),
        [
          {
            text: i18n.t('cancelButton'),
            style: 'cancel',
          },
          {
            text: i18n.t('clearButton'),
            onPress: () => {
              clearTodos()
            },
          },
        ],
        {
          cancelable: true,
        },
      )
    }
  }

  /**
   * Buttons at the bottom of the page.
   * @returns {node} - React node of buttons
   */
  const buttonsBottom = () => {
    return (
      <View style={styles.containerButtons}>
        <Button
          title={i18n.t('clearAllButton')}
          onPress={clearAllTodos}
        />
      </View>
    )
  }

  /**
   * Return a node of the to-do item.
   * @param {object} item - a to-do object.
   * @returns {node}      - React node
   */
  const renderItem = ({ item }) => (
    <TodoItem todoItem={item} navigation={navigation} removeTodo={removeTodo} />
  )

  return (
    <>
      <TodoForm addNewTodo={addTodo} />
      <FlatList
        style={styles.containerList}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={10} // Render only the first 10 items initially
        windowSize={5} // Adjust the number of items rendered outside the viewport
      />
      {buttonsBottom()}
    </>
  )
}

export default TodoList
