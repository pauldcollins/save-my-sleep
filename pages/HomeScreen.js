import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import HomeButton from "../components/HomeButton";
import Logo from "../assets/images/logo-with-title.png";
import constants from "./../constants/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162d50"
  },
  headerContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 120,
    paddingBottom: 20
  },
  headerLogo: {
    width: 200,
    height: 110,
    resizeMode: "contain"
  },
  headerSubText: {
    fontSize: 20,
    color: constants.colors.darkBlue,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20
  },
  separator: {
    height: 1,
    backgroundColor: "#FFF",
    opacity: 0.3
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerLogo} source={Logo} />

          <Text style={styles.headerSubText}>
            A set of different exercises{"\n"}to help you get to sleep
          </Text>
        </View>

        <HomeButton
          navigation={this.props.navigation}
          screenName="the878Method"
        />
        <View style={styles.separator} />

        <HomeButton
          navigation={this.props.navigation}
          screenName="progressiveRelaxation"
        />
        <View style={styles.separator} />

        <HomeButton
          navigation={this.props.navigation}
          screenName="accupressure"
        />
        <View style={styles.separator} />

        <HomeButton
          navigation={this.props.navigation}
          screenName="countingBackwards"
        />
        <View style={styles.separator} />

        <HomeButton
          navigation={this.props.navigation}
          screenName="leftNostrilBreathing"
        />
      </View>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={() => {
            //sdfdsfsd
          }}
          title="Blah blah"
        />
      )
    };
  };
}

export default HomeScreen;
