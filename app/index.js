import { View } from 'react-native'
import React, { useCallback } from 'react'
import SignIn from './signIn'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [fontsLoaded, fontError] = useFonts({
    'FontRegular': require('../assets/fonts/Poppins-Regular.ttf'),
    'FontSemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'FontBold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <SignIn />
    </View>
  )
}