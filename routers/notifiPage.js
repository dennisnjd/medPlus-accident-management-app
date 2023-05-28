import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function NotifiPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emergencyTextField}>
        <Text style={styles.emergencyText1}>Accident Details</Text>

        <Text style={styles.emergencyText2}>Distance : 3 KM </Text>
        <Text style={styles.emergencyText2}>Carrier : Dennis NJ </Text>

        <Text style={styles.emergencyText3}>Save a Life</Text>

      </View>

      <View style={styles.centered}>
        <TouchableOpacity style={styles.buttonstyle}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonstyle}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
        {/* <Text style={styles.emergencyText1}>Accident Details</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent: 'center',
  },
  centered: {
    height: "40%",
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  emergencyTextField: {
    alignItems: "center",
    paddingTop:70,
    justifyContent:'center',
    width: "100%",
    height: "60%",
    backgroundColor: "#ECF2FF",
  },
  emergencyText1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    paddingBottom:30,
  },
  emergencyText2: {
    fontSize: 27,
    // fontWeight: "bold",
    color: "black",
  },
  emergencyText3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffbe7bff",
  },

  buttonstyle: {  
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 120 * 2,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
  },
  buttonText: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 30,
  },
});
