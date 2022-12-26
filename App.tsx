import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import HomeScreen from "./component/HomeScreen";
import Menu from "./component/Menu";

export type StackParamList = {
  Restaurants:undefined,
  Menu:{restaurantName:string}
}

const Stack = createStackNavigator<StackParamList>();


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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    alignContent: "flex-end",
  },

  calcullationValueText: {
    color: "#a19c9c",
    fontSize: 30,
    textAlign: "right",
  },
  resultText: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
  },
});
