import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ onPress, classBtn, classTxt, text}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classBtn}
    >
      <Text className={classTxt}>{text}</Text>
    </TouchableOpacity>
  );
}
