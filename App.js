import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // For handling app navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // For creating a stack of screens

// Importing all the screens used in the app
import HomeScreen from 'PART2/screens/HomeScreen'; // The main home screen
import LoginScreen from 'PART2/screens/LoginScreen'; // The login screen
import EditMenuScreen from 'PART2/screens/EditMenuScreen'; // Screen to edit the menu
import FilterPage from 'PART2/screens/FilterPage'; // The first filter page
import filterTwo from 'PART2/screens/filterTwo'; // The second filter page
import homeTwo from 'PART2/screens/homeTwo'; // Another version of the home screen

// Creating a stack navigator to switch between screens
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Setting up the stack navigator */}
      <Stack.Navigator initialRouteName="Home">
        {/* The home screen, the first screen users will see */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }} // The title displayed on top of the screen
        />
        
        {/* The login screen for user authentication */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />

        {/* Screen for editing menu items */}
        <Stack.Screen
          name="EditMenu"
          component={EditMenuScreen}
          options={{ title: 'Edit Menu' }}
        />

        {/* The first filter screen */}
        <Stack.Screen
          name="Filter"
          component={FilterPage}
          options={{ title: 'Filter Menu' }}
        />

        {/* The second filter screen */}
        <Stack.Screen
          name="FilterTwo"
          component={filterTwo}
          options={{ title: 'Filter Screen' }}
        />

        {/* An alternative home screen layout */}
        <Stack.Screen
          name="HomeTwo"
          component={homeTwo}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
