import * as Location from "expo-location";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from "react-native-splash-screen";
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "./routers/Homepage";
import NotifiPage from "./routers/notifiPage";
import ProfileScreen from "./routers/profileScreen";
import { useEffect } from "react";

const Stack = createStackNavigator();

const App = () => {
 
  // useEffect(() =>{
  //   SplashScreen.hide();
  // })

  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="NotifiPage" component={NotifiPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default App;
