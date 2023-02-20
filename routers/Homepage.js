import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Homepage() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  const addInfo = () => {
    console.log("Additional info button clicked!");
    // do something
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileBar}>
        <Image
          source={require("./assets/profimg.png")}
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
      <TouchableOpacity style={styles.box}
      onPress={addInfo}>
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
    borderColor:'yellow',
    borderWidth:.3,
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

  addInfoBox:{
    position:"absolute",
    bottom: '10%',
    left: '22%',
    right: 0,
    height: 100,
    backgroundColor: 'transparent',
  },
  addInfotitle:{
    fontSize: 20,
    marginBottom: 20,
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    borderStyle: 'solid',
    transform: [{ perspective: 1000 }, { rotateX: '15deg' }, { rotateY: '5deg' }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.5,
    elevation: 8,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

//Button and its prop in react native
