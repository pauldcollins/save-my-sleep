import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import HomeButton from "../components/HomeButton";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 100,
    paddingBottom: 20
  },
  headerText: {
    fontSize: 40,
    color: "#545455",
    textAlign: "center"
  },
  headerSubText: {
    fontSize: 20,
    color: "#545455",
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>The Sleep App</Text>
          <Text style={styles.headerSubText}>
            A set of different exercises{"\n"}to help you get to sleep
          </Text>
        </View>

        <HomeButton
          navigation={this.props.navigation}
          screenName="the878Method"
        />

        <HomeButton
          navigation={this.props.navigation}
          screenName="progressiveRelaxation"
        />

        <HomeButton
          navigation={this.props.navigation}
          screenName="accupressure"
        />

        <HomeButton
          navigation={this.props.navigation}
          screenName="countingBackwards"
        />

        <HomeButton
          navigation={this.props.navigation}
          screenName="leftNostrilBreathing"
        />
      </View>
    );
  }
}

export default HomeScreen;
