import React from 'react';
import { View, Pressable, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants';
import { Link, router } from 'expo-router';

const OptionsProfile = () => {
  return (
    <Pressable className="flex w-full p-4">
      <View className="flex-row items-center">
        <Feather name='user' color={COLORS.default} size={SIZES.large}></Feather>
        <View className="flex-1 ml-3">
          <Text>Informações da Conta</Text>
          <Text style={{ fontSize: SIZES.small, maxWidth: '100%' }}>Aliquip quis veniam ea aliqua ullamco mollit Lorem. Aliquip nulla duis sint sint.</Text>
        </View>
        <Feather name='chevron-right' color={COLORS.default} size={SIZES.large}></Feather>
      </View>
    </Pressable>
  );
}

export default OptionsProfile;
