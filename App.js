import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { View, StyleSheet, Text } from "react-native";
import Homepage from "./routers/Homepage";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.0,
    longitude: 32.8116347,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const curLoc = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    console.log("foreground permission done");

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log("Current permission done");
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location);

    let statusBackground = await Location.requestBackgroundPermissionsAsync();
    if (statusBackground.status !== "granted") {
      console.log("Error accessing bg location");
      return false;
    } else {
      console.log("Permissioin to access bg location done");
      return true;
    }
  };

  useEffect(() => {
    curLoc();
    let locationSubscription = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 4000,
        distanceInterval: 1,
      },
      (location) => {
        console.log(location);
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    );
  }, []);

  const showmap = () => {
    console.log("hi");
  };

  return (
    <View style={styles.container}>
      <Homepage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default App;
