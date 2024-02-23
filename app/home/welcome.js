import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <View className="items-center">
        <Text className="text-4xl">Bem vindo, <Text className="font-bold">Luís</Text>!</Text>
      </View>
    </SafeAreaView>
  )
}