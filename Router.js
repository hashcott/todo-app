import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import Home from "./src/Screen/Home";
import Completed from "./src/Screen/Completed";
import Active from "./src/Screen/Active";
import SingleTodo from "./src/Components/SingleTodo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AllScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010920",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SingleTodo" component={SingleTodo} />
    </Stack.Navigator>
  );
};
const CompletedScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Completed"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010920",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Completed" component={Completed} />
      <Stack.Screen name="SingleTodo" component={SingleTodo} />
    </Stack.Navigator>
  );
};

const ActiveScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Active"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010920",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Active" component={Active} />
      <Stack.Screen name="SingleTodo" component={SingleTodo} />
    </Stack.Navigator>
  );
};
const Router = () => {
  return (
    <NavigationContainer style={styles.main}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "plussquare" : "plussquareo";
            } else if (route.name === "Completed") {
              iconName = focused ? "circledown" : "circledowno";
            } else if (route.name === "Active") {
              iconName = focused ? "codesquare" : "codesquareo";
            }
            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#4D7CF2",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Completed" component={CompletedScreen} />
        <Tab.Screen name="Home" component={AllScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#010920",
  },
});
export default Router;
