import React, { useCallback, useRef, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import i18n from 'util/i18n-utils'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
})

/**
 * Component to display a form of adding to-do.
 * @param {function} addNewTodo - a function to add a new to-do item
 * @returns {node}              - React node
 * @constructor
 */
function TodoForm ({ addNewTodo }) {
  const [todoValue, setTodoValue] = useState('')
  const inputRef = useRef()

  const submitAdd = useCallback(() => {
    inputRef?.current.blur()
    addNewTodo(todoValue)
    setTodoValue('')
  }, [inputRef, addNewTodo, todoValue, setTodoValue])

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={todoValue}
        onChangeText={text => setTodoValue(text)}
        autoCapitalize='none'
        placeholder={i18n.t('enterTodo')}
      />
      <Button
        title='   +   '
        onPress={submitAdd}
      />
    </View>
  )
}

export default TodoForm
