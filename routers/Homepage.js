import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Location from "expo-location";

export default function Homepage() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [liveLocArray, setLiveLocArray] = useState([]);

  const [locationData, setLocationData] = useState([]);
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.0,
    longitude: 32.8116347,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const curLoc = async () => {
    // function for getting current location of a user
    let { status } = await Location.requestForegroundPermissionsAsync(); //request for foreground permission
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({}); // getting current postion of a user
    setLocation(location);
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log("Current location is : ");
    console.log(location);

    let statusBackground = await Location.requestBackgroundPermissionsAsync(); // requesting bg permission
    if (statusBackground.status !== "granted") {
      console.log("Error accessing bg location");
      return false;
    } else {
      console.log("Permissioin to access bg location done");
      return true;
    }
  };

  const locationTrack = (timeIntr, msg) => {
    // function for locaion tracking
    let locationSubscription = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: timeIntr,
        distanceInterval: 1,
      },
      (location) => {
        console.log(msg);
        // console.log(location);
        //console.log(location.coords.accuracy);

        let abcd = {
          Accuracy: location.coords.accuracy,
          Latitude: location.coords.latitude,
          Longitude: location.coords.longitude,
        };

        // update the state of liveLocArray every time a new abcd object is added to it
        setLiveLocArray((prevState) => {
          let updatedArray = [...prevState, abcd];
          while (updatedArray.length > 4) {
            updatedArray.shift();
          }
          console.log(
            "The live location array is : " + JSON.stringify(updatedArray)
          );
          return updatedArray;
        });
      }
    );
  };

  useEffect(() => {
    curLoc();
    locationTrack(4000, "LOCATION WHEN WITHOUT HELP :");
  }, []);

  const buttonClickedHandler = () => {
    console.log("Button pressed");
    let newAr = liveLocArray;
    console.log(
      "The location is array is iss is is :  " + JSON.stringify(newAr)
    );
    newAr.Accuracy = parseFloat(newAr.Accuracy);

    const accuracies = newAr.map((item) => item.Accuracy).filter(Boolean);
    const minAccuracy = Math.min(...accuracies); // finding minimum accuracy value in new array
    console.log(minAccuracy);

    let sendLocIndex = accuracies.indexOf(minAccuracy); //find  minimum accuracy's index
    console.log(sendLocIndex);

    let sendLocation = {
      // returns best accurate location
      latitude: newAr[sendLocIndex].Latitude,
      longitude: newAr[sendLocIndex].Longitude,
    };

    console.log(sendLocation);

    compareLoc(
      liveLocArray[3].Latitude,
      liveLocArray[3].Longitude,
      9.685082,
      76.7771992
    );

    // compareLoc(
    //   sendLocation.latitude,
    //   sendLocation.longitude,
    //   9.685082,
    //   76.7771992
    // );

    // console.log("The accident current location details is : ");
    // async function getLocationUpdates() {
    //   let iterationCount = 0;
    //   let locationSubscription = await Location.watchPositionAsync(
    //     {
    //       accuracy: Location.Accuracy.High,
    //       timeInterval: 2000,
    //       distanceInterval: 1,
    //     },
    //     (location) => {
    //       //console.log("LOCATION  WHEN CLICKED HELP : ");
    //       //console.log(location);
    //       location.accuracy = parseFloat(location.accuracy);
    //       updateAccuracy(location); // storing accuracy values to array
    //       iterationCount++;

    //       if (iterationCount === 4) {
    //         locationSubscription.remove(); //stoping HELP location tracking after 4 iterations

    //         console.log("Location updates stopped after 4 iterations");
    //       }
    //     }
    //   );
    // }
    // getLocationUpdates();
  };

  // let curLocArr = []; //array for storing accuracy values
  // let maxArrLength = 4;

  // function updateAccuracy(newAccuracy) {
  //   //function to find best accuracy
  //   if (curLocArr.length < maxArrLength) curLocArr.push(newAccuracy);
  //   console.log("THE ARRAY ELEMENTS ARE :" + JSON.stringify(curLocArr));

  //   const accuracies = curLocArr // new array contains accuracy values only
  //     .map((item) => item.coords.accuracy)
  //     .filter(Boolean);
  //   const minAccuracy = Math.min(...accuracies); // finding minimum accuracy value in new array

  //   let sendLocIndex = accuracies.indexOf(minAccuracy); //find  minimum accuracy's index
  //   console.log(sendLocIndex);
  //   console.log(`The minimum accuracy value is ${minAccuracy}`);

  // let sendLocation = {
  //   // returns best accurate location
  //   latitude: curLocArr[sendLocIndex].coords.latitude,
  //   longitude: curLocArr[sendLocIndex].coords.longitude,
  // };

  // console.log(sendLocation);
  // console.log('The latitude is ' +sendLocation.latitude);
  //   compareLoc(
  //     sendLocation.latitude,
  //     sendLocation.longitude,
  //     9.685082,
  //     76.7771992
  //   );
  // }

  function compareLoc(lat1, lon1, lat2, lon2) {
    //function to compare and find nearby users
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = //Haversine Formula
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    // return d;

    const radius = 2; // check if the user is in 5KM
    if (d <= radius) console.log("It is a match");
    else console.log("It is not a match");
  }

  function deg2rad(deg) {
    // converting lat,long values to radian
    return deg * (Math.PI / 180);
  }

  const addInfo = () => {
    // additional info button functions
    console.log("Additional info button clicked!");
    // do something
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileBar}>
        <Image
          source={require("../assets/profimg.png")}
          style={styles.profilePhoto}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.bioText}>Software Developer</Text>
        </View>
      </View>

      <StatusBar style="auto" />

      <View style={styles.emergencyTextField}>
        <Text style={styles.emergencyText1}>Emergency Help</Text>
        <Text style={styles.emergencyText1}>Needed?</Text>
        <Text style={styles.emergencyText2}>Just press the Button</Text>
      </View>

      <View style={styles.alertButton}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}
        >
          <Text style={styles.text}>H E L P</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addInfoBox}>
        <Text style={styles.addInfotitle}>Got additional details?</Text>
        <TouchableOpacity style={styles.box} onPress={addInfo}>
          <Text style={styles.boxText}>Click here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF2FF",
    alignItems: "center",
    //justifyContent: 'center',
  },
  profileBar: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "86%",
    height: 74,
    marginTop: 60,
    borderColor: "yellow",
    borderWidth: 0.3,
    borderRadius: 50,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    paddingLeft: 10,
  },

  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 10,
  },
  textContainer: {
    alignItems: "center",
    flex: 1,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  bioText: {
    fontSize: 14,
    color: "black",
  },

  emergencyTextField: {
    alignItems: "center",
    top: "8%",
  },
  emergencyText1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  emergencyText2: {
    color: "#443C68",
    fontWeight: "bold",
    fontSize: 18,
  },

  alertButton: {
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    position: "absolute",
    top: "50%",
    left: "40%",
    marginLeft: -50,
    marginTop: -50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  roundButton2: {
    width: 170,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: "silver",
    backgroundColor: "#f94449",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  addInfoBox: {
    position: "absolute",
    bottom: "10%",
    left: "22%",
    right: 0,
    height: 100,
    backgroundColor: "transparent",
  },
  addInfotitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d9d9d9",
    borderWidth: 2,
    borderStyle: "solid",
    transform: [
      { perspective: 1000 },
      { rotateX: "15deg" },
      { rotateY: "5deg" },
    ],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.5,
    elevation: 8,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
