import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import styles from './myAccount.styles'
import DismissKeyboard from '../../../components/DismissKeyboard'

export default function Support() {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <DismissKeyboard>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="px-4">
          <View className="items-center space-y-3">
            <Text style={styles.nameText}>Suporte</Text>
            <Text style={styles.paragraph}>Aliquip tempor proident laborum esse aliqua exercitation sint Lorem cupidatat. Eu velit proident ex anim fugiat id ad voluptate enim deserunt.</Text>
          </View>
          <View className="mt-6">
            <Text style={styles.labelText}>Email</Text>
            <CustomInput placeholder='Digite seu email' value={userEmail} setValue={setUserEmail} />
          </View>
          <View className="mt-2 mb-6">
            <Text style={styles.labelText}>Mensagem</Text>
            <View className="w-full border rounded-xl p-5 my-2">
              <TextInput
                placeholder='Digite a mensagem'
                value={message}
                onChangeText={setMessage}
                style={styles.customInput}
                placeholderTextColor={'#c0c0c0'}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>
          <CustomButton onPress={() => console.warn('Enviando mensagem ao suporte')} styleBtn={styles.button_PRIMARY} styleTxt={styles.text_PRIMARY} text='Enviar' />
        </ScrollView>
      </SafeAreaView>
    </DismissKeyboard>
  )
}