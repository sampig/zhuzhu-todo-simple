import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import i18n from 'util/i18n-utils'
import { convertDateToString } from 'util/date-utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  createTime: {
    fontSize: 18,
  },
})

/**
 * Component to a to-do detail page.
 * @param {object} route - The route object in react native.
 * @returns {node}       - React node
 * @constructor
 */
function TodoDetail ({ route }) {
  const { todoItem } = route.params
  return todoItem ? (
    <View style={styles.container}>
      <Text style={styles.title}>{todoItem.title}</Text>
      <Text style={styles.createTime}>{i18n.t('todoCreateAt')} {convertDateToString(todoItem.createTime)}</Text>
    </View>
  ) : null
}

TodoDetail.propTypes = {
  route: PropTypes.object,
}

export default TodoDetail
