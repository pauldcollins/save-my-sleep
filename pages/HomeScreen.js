import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>SAVE MY SLEEP</Text>
          <Text style={styles.headerSubText}>
            A set of different exercises{"\n"}to help you get to sleep
          </Text>
        </View>

        <TouchableOpacity
          style={[{ backgroundColor: "#6261FD" }, styles.linkContainer]}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              screenName: "the878Method"
            });
          }}
        >
          <Text style={styles.linkText}>The 8-7-8 method</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: "#fc3768" }, styles.linkContainer]}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              screenName: "progressiveRelaxation"
            });
          }}
        >
          <Text style={styles.linkText}>
            Progressive relaxation{"\n"}
            (contracting muscles)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: "#f8982e" }, styles.linkContainer]}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              screenName: "accupressure"
            });
          }}
        >
          <Text style={styles.linkText}>
            Accupressure{"\n"}
            (touching in between the head)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: "#6fd0f4" }, styles.linkContainer]}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        >
          <Text style={styles.linkText}>Squeeze and relax</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[{ backgroundColor: "#35c749" }, styles.linkContainer]}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            });
          }}
        >
          <Text style={styles.linkText}>Left nostril breathing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50,
    paddingBottom: 20
  },
  headerText: {
    fontSize: 30,
    color: "#545455",
    textAlign: "center"
  },
  headerSubText: {
    fontSize: 20,
    color: "#545455",
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linkText: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center"
  }
});

export default HomeScreen;
