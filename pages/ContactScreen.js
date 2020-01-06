import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Linking,
  TouchableOpacity
} from "react-native";

import constants from "./../constants/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.darkBlue
  },
  contentContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  bodyText: {
    fontSize: 15,
    color: "#FFF",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 30
  },
  linkText: {
    fontSize: 15,
    color: "#FFF",
    textDecorationLine: "underline"
  },
  button: {
    marginHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.colors.darkBlue
  },
  buttonText: {
    color: constants.colors.darkBlue,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15
  }
});

class ContactScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Contact Us</Text>
          <Text style={styles.bodyText}>
            We want to continue to improve the app and we'd love to hear from
            you. If you have any feedback, compliments, or suggestions, please
            get in touch.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("mailto:thesleepapp@gmail.com")}
            underlayColor="#fff"
          >
            <Text style={styles.buttonText}>Email us!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.linkText}>Cancel</Text>
          </TouchableOpacity>
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
