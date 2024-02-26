import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './homePages.style'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <View className="items-center">
        <Text style={styles.title}>Bem vindo, <Text style={styles.strong}>Luís</Text>!</Text>
      </View>
    </SafeAreaView>
  )
}