import React from 'react';
import { useFonts, Montserrat_300Light, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Musica from './src/telas/Musica';
import Sobre from './src/telas/Sobre';
import Produto from './src/telas/Pacote';
import mock from './src/mocks/produto';
import mock_sobre from './src/mocks/sobre';
import mock_musicas from './src/mocks/musicas'

function MenuKit() {
  return <Produto {...mock} />
}

function MenuMusica() {
  return <Musica {...mock_musicas} />;
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />;
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PLAYLIST') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else if (route.name === 'SOBRE') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'MUSICAS') {
            iconName = focused ? 'play' : 'play-outline';
          } else if (route.name === 'DESEJOS') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="SOBRE" component={MenuSobre} />
      <Tab.Screen name="PLAYLIST" component={MenuKit} />
      <Tab.Screen name="MUSICAS" component={MenuMusica} />
      <Tab.Screen name="DESEJOS" component={MenuKit} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
