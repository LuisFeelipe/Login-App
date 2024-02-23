import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import DismissKeyboard from '../components/DismissKeyboard'
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

const onPressSentEmail = () => {
  router.push('signIn');
  Keyboard.dismiss();
}

export default function resetPassword() {
  const [user, setUser] = useState('');

  return (
    <DismissKeyboard>
      <View className="flex-1 items-center justify-center bg-white px-4">
        <KeyboardAvoidingView>
          <View className="items-center justify-center mt-12 mb-4">
            <Text className="text-4xl font-bold">Recuperar senha</Text>
            <Text className="mt-4 text-[15px]">Insira o seu usuário no campo abaixo. Enviaremos um email com mais informações, talvez demore alguns minutos.</Text>
          </View>
          <CustomInput placeholder='Usuário' value={user} setValue={setUser}/>
          <View className="w-full flex-row">
            <CustomButton onPress={onPressSentEmail} classBtn={'w-full bg-blue-500 rounded-xl px-8 py-4 my-3 items-center'} classTxt={'text-white font-bold text-lg'} text='Confirmar'/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}