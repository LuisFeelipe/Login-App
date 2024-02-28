import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT } from '../constants/theme'
 
const CustomInput = ({value, setValue, placeholder, secureTextEntry, readOnly}) => {
  return (
    <View className="w-full flex-row border rounded-xl p-5 my-2">
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={'#c0c0c0'}
        style={styles.customInput}
        secureTextEntry={secureTextEntry}  
        autoCorrect={false}
        spellCheck={false}
        readOnly={readOnly}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    width: '100%',
    color: COLORS.default,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  }
});

export default CustomInput