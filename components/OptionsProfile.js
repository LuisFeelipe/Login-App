import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import styles from '../app/home/myAccount/myAccount.styles'

const OptionsProfile = ({ navigation, goTo, icon, titleTxt, subtitleTxt }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(goTo)} className="flex flex-row items-center my-3">
        <Feather name={icon} color={COLORS.gray} size={SIZES.large}></Feather>
        <View className="flex-1 ml-3">
          <Text style={styles.title}>{titleTxt}</Text>
          <Text style={styles.subtitle}>{subtitleTxt}</Text>
        </View>
        <Feather name='chevron-right' color={COLORS.gray} size={SIZES.large}></Feather>
      </TouchableOpacity>
    </View>
  );
}

export default OptionsProfile;
