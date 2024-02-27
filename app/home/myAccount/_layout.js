import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMyAccount from "./homeMyAccount";
import Profile from "./profile";

const MyStack = createNativeStackNavigator();

export default function StackRoutes() {
  return(
    <MyStack.Navigator>
      <MyStack.Screen 
        name="home"
        component={HomeMyAccount}
      />

      <MyStack.Screen 
        name="profile"
        component={Profile}
      />

    </MyStack.Navigator>
  )
}