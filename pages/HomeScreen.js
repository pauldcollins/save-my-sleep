import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native";

import HomeButton from "../components/HomeButton";
import Logo from "../assets/images/logo-with-title-white.png";
import CogIcon from "../assets/icons/cog-icon.png";
import BackgroundImage from "../assets/images/564383.jpg";
import constants from "./../constants/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    display: "flex",
    height: "100%"
  },
  image: {
    resizeMode: "cover",
    height: "100%"
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: constants.colors.white
  },
  headerLogo: {
    width: 200,
    height: 110,
    resizeMode: "contain"
  },
  contactContainer: {
    flex: 0.5,
    height: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 15
  },
  contactIcon: {
    width: 25,
    height: 25,
    alignSelf: "flex-end"
  },
  headerSubText: {
    fontSize: 20,
    color: constants.colors.white,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20
  },
  separator: {
    height: 1,
    backgroundColor: constants.colors.white,
    opacity: 0.3
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={BackgroundImage}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.contactContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Contact");
              }}
            >
              <Image
                style={styles.contactIcon}
                source={CogIcon}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
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
          <View style={styles.separator} />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: constants.colors.blackBlue
      }
    };
  };
}

export default HomeScreen;
