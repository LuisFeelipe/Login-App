import 'react-native-gesture-handler';
import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import CustomInput from '../components/CustomInput'

export default function Root(){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <View className="items-center justify-center my-12">
        <Text className="text-4xl font-bold">Login App</Text>
      </View>
      <CustomInput placeholder='Usuário' value={user} setValue={setUser}/>
      <CustomInput placeholder='Senha' value={password} setValue={setPassword} secureTextEntry={true}/>

      <TouchableOpacity 
        onPress={() => router.push('home')}
        className="w-full bg-blue-500 rounded-xl px-8 py-4 mt-3 items-center">
        <Text className="text-white font-bold text-lg">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => console.warn('Criar conta')}
        className="w-full bg-transparent rounded-xl px-8 py-4 items-center">
        <Text className="text-black font-bold text-lg">Criar conta</Text>
      </TouchableOpacity>
    </View>
  )
}