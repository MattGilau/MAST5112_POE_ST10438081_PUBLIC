import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // (IIE, 2024)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // (IIE, 2024)

// Importing screens
import HomeScreen from 'PART2/screens/HomeScreen';
import LoginScreen from 'PART2/screens/LoginScreen';
import EditMenuScreen from 'PART2/screens/EditMenuScreen';
import FilterPage from 'PART2/screens/FilterPage';
import filterTwo from 'PART2/screens/filterTwo';
import homeTwo from 'PART2/screens/homeTwo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="EditMenu"
          component={EditMenuScreen}
          options={{ title: 'Edit Menu' }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterPage}
          options={{ title: 'Filter Menu' }}
        />
        <Stack.Screen
          name="FilterTwo"
          component={filterTwo}
          options={{ title: 'Filter Screen' }}
        />
        <Stack.Screen
          name="HomeTwo"
          component={homeTwo}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


