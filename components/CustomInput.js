import { View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View className="w-full border rounded-xl p-5 my-2">
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={'#c0c0c0'}
        style={{fontSize: 16}}
        secureTextEntry={secureTextEntry}  
      />
    </View>
  )
}

export default CustomInput