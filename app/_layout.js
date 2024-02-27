import React from 'react'
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'

export default function Layout() {

  return (
    <NavigationContainer>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
        initialRouteName='signIn'
      />
    </NavigationContainer>
  )
}