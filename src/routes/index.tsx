import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { useUser } from "../contexts/user";
import { Extract } from "../pages/Extract";
import { NewSlip } from "../pages/NewSlip";
import SplashScreen from "react-native-splash-screen";
import { Text, View } from "react-native";
import { x } from "../icons";
import ToastWrapper from "react-native-toast-message";

const Stack = createStackNavigator();

export const Routes = () => {
  const { user } = useUser();

  const initialRoute = user?.name ? "Home" : "Login";

  useEffect(() => {
    if (initialRoute === "Home" || initialRoute === "Login") {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Extract" component={Extract} />
        <Stack.Screen name="NewSlip" component={NewSlip} />
      </Stack.Navigator>
      <ToastWrapper ref={(ref) => ToastWrapper.setRef(ref)} />
    </NavigationContainer>
  );
};
