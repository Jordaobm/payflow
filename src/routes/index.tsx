import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { useUser } from "../contexts/user";

const Stack = createStackNavigator();

export const Routes = () => {
  const { user } = useUser();

  const initialRoute = user?.name ? "Home" : "Login";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
