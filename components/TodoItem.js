import React, { memo } from 'react'
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import i18n from 'util/i18n-utils'

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderWidth: 2,
    // borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 6,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  titleSection: {
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
  },
  finishButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

/**
 * Component to display a single to-do.
 * @param {object} todoItem     - a to-do object.
 * @param {object} navigation   - the navigation object in route.
 * @param {function} removeTodo - a function to add a new to-do item
 * @returns {node}              - React node
 * @constructor
 */
const TodoItem = memo(({ todoItem, navigation, removeTodo }) => {
  const current = Date.now()
  const diff = current - todoItem?.createTime
  const colors = {
    recent: {
      borderColor: '#007700',
      underlayColor: '#aaffaa',
    },
    day: {
      borderColor: '#0000ff',
      underlayColor: '#aaaaff',
    },
    week: {
      borderColor: '#cccc00',
      underlayColor: '#ccccaa',
    },
    old: {
      borderColor: '#ff0000',
      underlayColor: '#ffaaaa',
    },
  }
  let color = colors.recent
  if (diff <= 60 * 60 * 1000) {
    color = colors.recent
  } else if (diff <= 24 * 60 * 60 * 1000) {
    color = colors.day
  } else if (diff <= 7 * 24 * 60 * 60 * 1000) {
    color = colors.week
  } else {
    color = colors.old
  }

  /**
   * If the text is too long, make it short.
   * @param {string} text - the text
   * @returns {string}    - the original text or a short text
   */
  const subText = (text) => {
    if (text.length > 20) {
      return text.substring(0, 20) + '...'
    }
    return text
  }

  /**
   * A function to open a to-do.
   */
  const openDetailPage = () => {
    navigation.navigate('Detail', { todoItem: todoItem })
  }

  /**
   * A function to delete a to-do.
   */
  const finishTodo = () => {
    if (Platform.OS === 'web') {
      removeTodo(todoItem.id)
    } else {
      Alert.alert(
        i18n.t('finishTodoTitle'),
        i18n.t('finishTodoText', { title: todoItem.title }),
        [
          {
            text: i18n.t('cancelButton'),
            style: 'cancel',
          },
          {
            text: i18n.t('doneButton'),
            onPress: () => {
              removeTodo(todoItem.id)
            },
          },
        ],
        { cancelable: true },
      )
    }
  }

  /**
   * Title section.
   * @returns {node} - React node of title
   */
  const titleSection = () => {
    return (
      <TouchableHighlight
        onPress={openDetailPage}
        style={[styles.item, { borderColor: color.borderColor }]}
        underlayColor={color.underlayColor}
      >
        <View style={styles.titleSection}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{subText(todoItem.title)}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View style={styles.container}>
      {titleSection()}
      <TouchableHighlight
        onPress={finishTodo}
        style={styles.finishButton}
        underlayColor='white'
      >
        <MaterialIcons name='check' size={40} color='green' />
      </TouchableHighlight>
    </View>
  )
})

export default TodoItem
