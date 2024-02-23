import { View, Text, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import DismissKeyboard from '../components/DismissKeyboard';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';

const onPressCreateAccount = () => {
  router.push('home');
  Keyboard.dismiss();
}

const onPressSignIn = () => {
  router.push('signIn');
  Keyboard.dismiss();
}

export default function SignUp() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <DismissKeyboard>
      <View className="flex-1 items-center justify-center bg-white px-4">
        <KeyboardAvoidingView className="w-full items-center justify-center" behavior='padding'>
          <View className="items-center justify-center my-12">
            <Text className="text-4xl font-bold">Criar Conta</Text>
          </View>
          <View className="w-full items-center justify-center">
            <CustomInput placeholder="Usuário" value={user} setValue={setUser} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Senha" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="Confirmar senha" value={passwordConfirm} setValue={setPasswordConfirm} secureTextEntry={true} />
          </View>
          <View className="w-full">
            <CustomButton onPress={onPressCreateAccount} classBtn={'w-full bg-blue-500 rounded-xl px-8 py-4 my-3 items-center'} classTxt={"text-white font-bold text-lg"} text='Criar conta'/>
            <CustomButton onPress={onPressSignIn} classBtn={'w-full bg-transparent rounded-xl px-8 py-4 items-center'} classTxt={"text-black font-bold text-lg"} text='Já possui uma conta ?'/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}