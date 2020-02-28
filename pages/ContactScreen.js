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

import { colors } from "./../pages/content";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBlue
  },
  contentContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 26,
    color: colors.white,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  bodyText: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 30
  },
  linkText: {
    fontSize: 15,
    color: colors.white,
    textDecorationLine: "underline"
  },
  button: {
    marginHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white"
  },
  buttonText: {
    color: "white",
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
          <Text style={[styles.bodyText, { marginBottom: 5 }]}>
            Thanks for supporting and using The Sleep App! We hope it's helped
            you find rest.
          </Text>
          <Text style={styles.bodyText}>
            We want to continue to improve the app and we'd love to hear from
            you. If you have any feedback, compliments, or suggestions, please
            get in touch.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("mailto:thesleepapp@gmail.com")}
            underlayColor={colors.white}
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
          color={colors.white}
        />
      )
    };
  };
}

export default ContactScreen;
