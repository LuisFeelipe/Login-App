import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Welcome from "./welcome";
import Profile from './profile';
import Settings from "./settings";
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { SimpleLineIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import styles from './homePages.style';
import { COLORS, SIZES } from '../../constants';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-1">
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
            //make a signOut function
            console.warn('Sair da conta');
          }}
          className="w-full items-center flex-row mx-4 my-3"
        >
          <SimpleLineIcons name="logout" size={SIZES.xLarge} color="red" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

export default function HomeLayout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible:false,  
      }}
      initialRouteName="Início" drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Início"
        component={Welcome}
        options={{
          drawerIcon: ({ color }) => <Feather name="home" color={color} size={SIZES.xLarge}></Feather>,
          drawerLabel: 'Início',
          drawerLabelStyle: styles.menuText,
          drawerActiveTintColor: COLORS.primary,
          drawerActiveBackgroundColor: COLORS.active,
          drawerStyle: {
            backgroundColor: COLORS.white,
          }
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => <Feather name="user" color={color} size={SIZES.xLarge}></Feather>,
          drawerLabel: 'Meu Perfil',
          drawerLabelStyle: styles.menuText,
          drawerActiveTintColor: COLORS.primary,
          drawerActiveBackgroundColor: COLORS.active,
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Settings}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="settings-outline" color={color} size={SIZES.xLarge}></Ionicons>,
          drawerLabel: 'Configurações',
          drawerLabelStyle: styles.menuText,
          drawerActiveTintColor: COLORS.primary,
          drawerActiveBackgroundColor: COLORS.active,
        }}
      />
    </Drawer.Navigator>
  )
}