import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import i18n from 'util/i18n-utils'
import TodoList from 'components/TodoList'
import TodoDetail from 'components/TodoDetail'

const { Navigator, Screen } = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' options={{ title: i18n.t('todoListHome') }} component={TodoList} />
        <Screen name='Detail' options={{ title: i18n.t('detailPageTitle') }} component={TodoDetail} />
      </Navigator>
    </NavigationContainer>
  )
}
