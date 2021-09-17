import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/Dailypic";
import StarMapScreen from "./screens/Starmap";
import SpaceCraftsScreen from "./screens/SpaceCrafts";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
         <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;