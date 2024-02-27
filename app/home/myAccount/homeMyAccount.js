import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../constants'
import styles from './myAccount.styles'
import { router } from 'expo-router'

export default function HomeMyAccount({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('profile')} className="flex flex-row items-center">
          <Feather name='user' color={COLORS.gray} size={SIZES.large}></Feather>
          <View className="flex-1 ml-3">
            <Text style={styles.title}>Informações da Conta</Text>
            <Text style={styles.subtitle}>Laborum anim reprehenderit adipisicing ullamco voluptate laboris amet velit.</Text>
          </View>
          <Feather name='chevron-right' color={COLORS.gray} size={SIZES.large}></Feather>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}