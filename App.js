const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Artist from "./screens/Artist";
import Popular from "./screens/Popular";
import Popular1 from "./screens/Popular1";
import SignIn from "./screens/SignIn";
import SignUp from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser/screens/SignUp.js";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_extrabold: require("./assets/fonts/Poppins_extrabold.ttf"),
    Nunito_semibold: require("./assets/fonts/Nunito_semibold.ttf"),
    Nunito_bold: require("./assets/fonts/Nunito_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Artist"
              component={Artist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Popular"
              component={Popular}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Popular1"
              component={Popular1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
