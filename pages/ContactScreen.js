import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

import HomeButton from "../components/HomeButton";
import Logo from "../assets/images/logo-with-title-white.png";
import CogIcon from "../assets/icons/cog-icon.png";
import constants from "./../constants/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.darkBlue
  },
  contentContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: constants.colors.blackBlue,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFF"
  },
  headerText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20
  }
});

class ContactScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Contact Us</Text>
          <Text>
            We want to continue to improve the app and we'd love to hear from
            you. If you have any feedback, compliments, or suggestions, please
            Contact Us
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Close"
          color="#FFFFFF"
        />
      )
    };
  };
}

export default ContactScreen;
