import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  const navigateToNavigationScreen = () => {
    navigation.navigate("NavigationScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.button}
        active
        opacity={0.8}
        onPress={navigateToNavigationScreen}
      >
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    color: "#6f6f6f",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
