import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { images } from '../../constants';
import { EvilIcons } from '@expo/vector-icons'

export default function Profile() {
  return (
    <ScrollView className="w-full bg-white px-4">
      <View className="flex flex-row w-full rounded-xl h-24 bg-slate-300 my-5 px-3 py-4">
        <View className="relative flex-1 rounded-full max-w-[64px] max-h-[64px] bg-white items-center justify-center">
          <Image
            source={images.profileImg}
            resizeMode='contain'
            className="max-w-[42px] max-h-[42px]"
          />
          <TouchableOpacity className="absolute right-0 bottom-0 bg-white rounded-full p-0.5">
            <EvilIcons name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="ml-4 my-1">
          <Text>Luís Felipe</Text>
          <Text>emailteste@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  )
}