import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import DismissKeyboard from '../components/DismissKeyboard';
import styles from "./authenticationPages.style";

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
        <KeyboardAvoidingView className="w-full" behavior='position'>
          <View className="items-center justify-center my-12">
            <Text style={styles.title}>Login App</Text>
          </View>

          <CustomInput placeholder='Usuário' value={user} setValue={setUser} />
          <CustomInput placeholder='Senha' value={password} setValue={setPassword} secureTextEntry={true} />
          <View className="mb-3 w-full items-end">
            <Link href="/resetPassword" style={styles.link} onPress={() => Keyboard.dismiss()}>Esqueceu a senha ?</Link>
          </View>
          <CustomButton onPress={onPressLogin} styleBtn={styles.button_PRIMARY} styleTxt={styles.text_PRIMARY} text='Entrar' />
          <CustomButton onPress={onPressSignUp} styleBtn={styles.button_SECONDARY} styleTxt={styles.text_SECONDARY} text='Criar conta' />

        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}