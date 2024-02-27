import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { images } from '../../../constants'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { EvilIcons } from '@expo/vector-icons'
import styles from './myAccount.styles'

const onPressSaveProfile = () => {
  console.warn('Salvando Alterações');
}

const onPressChangeImgProfile = () => {
  console.warn('Mudar Foto de Perfil');
}

const onPressEditProfile = () => {
  console.warn('Editar Perfil');
}

export default function Profile() {
  const [user, setUser] = useState('lfelipe_sf');
  const [name, setUserName] = useState('Luís Felipe');
  const [email, setEmail] = useState('emailteste@gmail.com');
  const [password, setPassword] = useState('1234567@89');

  return (
    <ScrollView className="w-full bg-white px-4">
      <View className="flex flex-row w-full rounded-xl h-24 bg-slate-300 my-5 p-4">
        <View className="relative flex-1 rounded-full max-w-[64px] max-h-[64px] bg-white items-center justify-center">
          <Image
            source={images.profileImg}
            resizeMode='contain'
            className="max-w-[42px] max-h-[42px]"
          />
          <TouchableOpacity className="absolute right-0 bottom-0 bg-white rounded-full py-0.5 px-[1px]" onPress={onPressChangeImgProfile}>
            <EvilIcons name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 ml-4">
          <Text style={styles.nameText}>Luís Felipe</Text>
          <Text style={styles.username}>lfelipe_sf</Text>
        </View>
        <View>
          <TouchableOpacity className="bg-white px-2 py-1 rounded-lg" onPress={onPressEditProfile}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.labelText}>Usuário</Text>
          <CustomInput value={user} setValue={setUser} readOnly={true} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.labelText}>Nome</Text>
          <CustomInput value={name} setValue={setUserName} readOnly={true} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.labelText}>Email</Text>
          <CustomInput value={email} setValue={setEmail} readOnly={true} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.labelText}>Senha</Text>
          <CustomInput value={password} setValue={setPassword} secureTextEntry={true} readOnly={true} />
        </View>

        <View>
          <CustomButton onPress={onPressSaveProfile} styleBtn={styles.disabledButton} styleTxt={styles.disabledText} text='Salvar' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}