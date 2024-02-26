import { View, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import DismissKeyboard from '../components/DismissKeyboard'
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';
import styles from './authenticationPages.style';

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
            <Text style={styles.title}>Recuperar senha</Text>
            <Text style={styles.longText}>Insira o seu usuário no campo abaixo. Enviaremos um email com mais informações, talvez demore alguns minutos.</Text>
          </View>
          <CustomInput placeholder='Usuário' value={user} setValue={setUser}/>
          <View className="w-full flex-row">
            <CustomButton onPress={onPressSentEmail} styleBtn={styles.button_PRIMARY} styleTxt={styles.text_PRIMARY} text='Confirmar'/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  )
}