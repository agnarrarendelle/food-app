import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import HomeScreen from "./component/HomeScreen";
import Menu from "./component/Menu";

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={Menu}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

