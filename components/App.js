import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'

import { authVerify } from '../store/actions'
import InitLoading from './Screens/InitLoading'
import SignIn from './Screens/SignIn'
import AddEmployee from './Screens/AddEmployee'
import UpdateEmployee from './Screens/UpdateEmployee'
import EmployeeInfo from './Screens/EmployeeInfo'
import HeaderContainer from './UI/Header/HeaderContainer'

const Stack = createStackNavigator()

const App = ({ initLoading, token, authVerify }) => {
  useEffect(() => {
    authVerify()
  }, [])
  if (initLoading)
    return <InitLoading />
  const routes = token
    ? (
      <>
        <Stack.Screen name="AddEmployee" component={AddEmployee} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateEmployee" component={UpdateEmployee} options={{ headerShown: false }} />
        <Stack.Screen name="EmployeeInfo" component={EmployeeInfo} options={{
          header: () => (
            <SafeAreaView style={{ backgroundColor: '#fff', paddingBottom: 0 }}>
              <HeaderContainer />
            </SafeAreaView>
          ),
        }} />
      </>
    )
    : <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EmployeeInfo" headerMode="screen"
          screenOptions={{ gestureEnabled: false }}>
          {routes}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const mapStateToProps = ({ verifyReducer: { initLoading }, requestReducer: { token } }) => ({
  initLoading,
  token
})
const mapDispatchToProps = dispatch => ({
  authVerify: () => dispatch(authVerify())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)