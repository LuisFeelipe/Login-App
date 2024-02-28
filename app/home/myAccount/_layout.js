import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMyAccount from "./homeMyAccount";
import Profile from "./profile";
import Purchases from "./purchases";
import Support from "./support";

const MyStack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <MyStack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      title: '',
    }}>
      <MyStack.Screen
        name="home"
        component={HomeMyAccount}
      />

      <MyStack.Screen
        name="profile"
        component={Profile}
      />

      <MyStack.Screen
        name="purchases"
        component={Purchases}
      />

      <MyStack.Screen
        name="support"
        component={Support}
      />

    </MyStack.Navigator>
  )
}