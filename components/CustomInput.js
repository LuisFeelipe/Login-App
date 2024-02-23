import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
 
const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View className="w-full flex-row justify-between border rounded-xl p-5 my-2">
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={'#c0c0c0'}
        style={{fontSize: 16, width: '100%'}}
        secureTextEntry={secureTextEntry}  
        autoCorrect={false}
        spellCheck={false}
      />
    </View>
  )
}

export default CustomInput