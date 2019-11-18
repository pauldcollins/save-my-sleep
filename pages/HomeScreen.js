import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import HomeButton from "../components/HomeButton";
import Logo from "../assets/images/logo-with-title.png";

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    color: "#162d50",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20
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
