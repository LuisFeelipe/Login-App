import { ScrollView } from 'react-native'
import React from 'react'
import OptionsProfile from '../../../components/OptionsProfile'

export default function HomeMyAccount({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <OptionsProfile
        navigation={navigation} goTo='profile'
        icon='user'
        titleTxt='Informações da Conta'
        subtitleTxt='Laborum anim reprehenderit adipisicing ullamco voluptate laboris amet velit.'
      />

      <OptionsProfile
        navigation={navigation} goTo='purchases'
        icon='shopping-bag'
        titleTxt='Compras'
        subtitleTxt='Laborum anim reprehenderit adipisicing ullamco voluptate laboris amet velit.'
      />

      <OptionsProfile
        navigation={navigation} goTo='support'
        icon='headphones'
        titleTxt='Suporte'
        subtitleTxt='Laborum anim reprehenderit adipisicing ullamco voluptate laboris amet velit.'
      />
    </ScrollView>
  )
}