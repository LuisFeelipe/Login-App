import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 items-cente justify-center bg-white">
      <View className="items-center">
        <Text>Bem vindo, Luís!</Text>
      </View>
    </SafeAreaView>
  )
}