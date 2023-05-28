import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function ProfileScreen() {    //update profile details here
  const profile = {
    name: "Jane Doe",
    number: "9876543210",
    vehicle_number: "KL 13 0001",
    acceptedCases : '6',
    completedCases: '5'
  };

  const [name, setName] = useState(profile.name);
  const [number, setNumber] = useState(profile.number);
  const [vehicle_number, setVehicleNumber] = useState(profile.vehicle_number);

  const [showNameField, setShowNameField] = useState(false); //to show/unshow edit name fields
  const [showNumberField, setShowNumberField] = useState(false); //to show/unshow edit mobile number fields
  const [showVehicleNumberField, setShowVehicleNumberField] = useState(false); //to show/unshow edit vehicle number fields

  const handleNamePress = () => {
    setShowNameField(!showNameField);
  }; //function to show/unshow edit name field

  const handleNumberPress = () => {
    setShowNumberField(!showNumberField);
  }; //function to show/unshow edit number field

  const handleVehicleNumberPress = () => {
    setShowVehicleNumberField(!showVehicleNumberField);
  }; //function to show/unshow edit vehicle number field

  const handleSubmitName = () => {
    //code here to edit name
    console.log("name updated");
  };

  const handleSubmitNumber = () => {
    //code here to edit number
    console.log("number updated");
  };

  const handleSubmitVehicleNumber = () => {
    //code here to edit backend
    console.log("Vehicle number updated");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require("../assets/profimg.png")}
          />

          <Text style={styles.name}>{profile.name} </Text>
          <Text style={styles.userInfo}>{profile.number}</Text>

          <View style={styles.section}>
            <Text style={styles.statCount}>{profile.acceptedCases}</Text>
            <Text style={styles.statLabel}>Cases Accepted</Text> 
            <Image 
              style={styles.icon}
              source={require('../assets/check.png')}
              />
          </View>
          <View style={styles.section}>
            <Text style={styles.statCount}>{profile.completedCases}</Text>
            <Text style={styles.statLabel}>Cases Completed</Text>
            <Image
            style={styles.icon}
            source={require('../assets/badge-check.png')}
            />
        </View>

        </View>


      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={handleNamePress}
            >
              <Text style={styles.buttonText}>Edit Name</Text>
            </TouchableOpacity>

            {showNameField && (
              <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new name"
                  value={name}
                  onChangeText={setName}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmitName({ name })}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}


            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={handleNumberPress}
            >
              <Text style={styles.buttonText}>Edit Number</Text>
            </TouchableOpacity>

            {showNumberField && (
              <View style={styles.form}>
                <Text style={styles.label}>Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new number"
                  numeric
                  keyboardType={"numeric"}
                  value={number}
                  onChangeText={setNumber}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmitNumber({ number })}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={handleVehicleNumberPress}
            >
              <Text style={styles.buttonText}>Edit Vehicle Number</Text>
            </TouchableOpacity>

            {showVehicleNumberField && (
              <View style={styles.form}>
                <Text style={styles.label}>Vehicle Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new register number"
                  value={vehicle_number}
                  onChangeText={setVehicleNumber}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmitVehicleNumber({ vehicle_number })}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  icon: {
   width : 20,
   height : 20,
   marginLeft : 20
  },
  section: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    marginVertical:5,
    paddingHorizontal:10,
    paddingLeft:30,
  },
  statCount: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginLeft:4
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#DCDCDC",
    height: 500,
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  buttonstyle: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 120 * 2,
    height: 60,
    backgroundColor: "white",
    borderRadius: 20,
  },
  buttonText: {
    color: "lightblue",
    fontSize: 20,
  },

});
