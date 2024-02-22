import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Welcome from "./welcome";
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { SimpleLineIcons } from '@expo/vector-icons';
import Settings from "./settings";
import { Button, Text, TouchableOpacity, View } from "react-native";

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <View className="flex-1">
        <DrawerItemList {...props}/>
        <TouchableOpacity 
          onPress={() => {
            props.navigation.closeDrawer();
            //make a logout function, using firebase maybe???
            console.warn('Sair da conta')
          }}
          className="w-full items-center flex-row mx-4 my-3"
        >
          <SimpleLineIcons name="logout" size={22} color="red"/>
          <Text style={{ fontSize: 15, marginLeft: 36, color: 'red', fontWeight: 'bold' }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

export default function HomeLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Início" drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Início"
        component={Welcome}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size}></Feather>,
          drawerLabel: 'Início'
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size}></Ionicons>,
          drawerLabel: 'Configurações'
        }}
      />
    </Drawer.Navigator>
  )
}