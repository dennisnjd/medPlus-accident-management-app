import * as Location from "expo-location";
import { View, StyleSheet, Text } from "react-native";
import Homepage from "./routers/Homepage";

const App = () => {
 

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
