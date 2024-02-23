import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import DismissKeyboard from '../components/DismissKeyboard';

const onPressLogin = () => {
  router.push('home');
  Keyboard.dismiss();
}

const onPressSignUp = () => {
  router.push('signUp');
  Keyboard.dismiss();
}

export default function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DismissKeyboard>
      <View className="flex-1 items-center justify-center bg-white px-4">
        <KeyboardAvoidingView className="w-full" behavior='padding' >
          <View className="items-center justify-center my-12">
            <Text className="text-4xl font-bold">Login App</Text>
          </View>

          <CustomInput placeholder='Usuário' value={user} setValue={setUser} />
          <CustomInput placeholder='Senha' value={password} setValue={setPassword} secureTextEntry={true} />
          <View className="mb-3 w-full items-end">
            <Link href="/resetPassword" className='text-blue-600' onPress={() => Keyboard.dismiss()}>Esqueceu a senha ?</Link>
          </View>
          <CustomButton onPress={onPressLogin} classBtn={'w-full bg-blue-500 rounded-xl px-8 py-4 my-3 items-center'} classTxt={"text-white font-bold text-lg"} text='Entrar' />
          <CustomButton onPress={onPressSignUp} classBtn={'w-full bg-transparent rounded-xl px-8 py-4 items-center'} classTxt={"text-black font-bold text-lg"} text='Criar conta' />

        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}