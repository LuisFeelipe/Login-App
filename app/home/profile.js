import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { images } from '../../constants'

export default function Profile() {
  return (
    <ScrollView className="w-full bg-white px-4">
      <View className="flex justify-center w-full rounded-xl h-24 bg-slate-300 my-5 p-3">
        <Image
          source={images.profileImg}
          resizeMode='contain'
          className="max-w-[48px] max-h-[48px]"
        />

      </View>
    </ScrollView>
  )
}