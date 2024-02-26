import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ onPress, styleBtn, styleTxt, text}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='w-full rounded-xl px-8 py-4 items-center'
      style={styleBtn}
    >
      <Text style={styleTxt}>{text}</Text>
    </TouchableOpacity>
  );
}
