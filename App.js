import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Artist from "./screens/Artist";
import Detil from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/Detil";
import Popular1 from "./screens/Popular1";
import SignIn from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/SignIn";
import SignUp from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/SignUp";
import Splash from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/Splash";
import ArtisDetil from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/ArtisDetil";
import TicketScreen from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/TicketScreen"; 
import ConfirmScreen from "/Users/User/OneDrive/Dokumen/Kodingding/Native/konser1/screens/ConfirmScreen"; 
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
const Stack = createNativeStackNavigator();

const App = () => {

  React.useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = getAuth(app);
    }
  }, []);

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
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />
            <Stack.Screen
              name="Artist"
              component={Artist}
            />
            <Stack.Screen
              name="Detil"
              component={Detil}
            />
            <Stack.Screen
              name="Popular1"
              component={Popular1}
            />
            <Stack.Screen
              name="ArtisDetil"
              component={ArtisDetil}
            />
            <Stack.Screen
              name="TicketScreen"
              component={TicketScreen}
            />
            <Stack.Screen
              name="ConfirmScreen"
              component={ConfirmScreen}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
