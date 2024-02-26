import { View, Text, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import DismissKeyboard from '../components/DismissKeyboard';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton';
import styles from './authenticationPages.style';

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
            <Text style={styles.title}>Criar Conta</Text>
          </View>
          <View className="w-full items-center justify-center">
            <CustomInput placeholder="Usuário" value={user} setValue={setUser} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Senha" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="Confirmar senha" value={passwordConfirm} setValue={setPasswordConfirm} secureTextEntry={true} />
          </View>
          <View className="w-full">
            <CustomButton onPress={onPressCreateAccount} styleBtn={styles.button_PRIMARY} styleTxt={styles.text_PRIMARY} text='Criar conta'/>
            <CustomButton onPress={onPressSignIn} styleBtn={styles.button_SECONDARY} styleTxt={styles.text_SECONDARY} text='Já possui uma conta ?'/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}