import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import BackgroundImage from "../assets/images/564383.jpg";
import ButtonImage from "../assets/images/button-graphic.jpg";
import { colors } from "../pages/content";

// content
import * as content from "./content";

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white
  },
  headerText: {
    fontSize: 30,
    color: colors.white,
    textAlign: "center"
  },
  headerSubText: {
    fontSize: 20,
    color: colors.white,
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  contentContainer: {
    flex: 3,
    paddingVertical: 10
  },
  contentText: {
    fontSize: 20,
    color: colors.white,
    textAlign: "left",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
  separator: {
    height: 1,
    backgroundColor: colors.white,
    opacity: 0.3
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonImage: {
    width: 25,
    height: 25,
    marginLeft: 45
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

class DetailsScreen extends React.Component {
  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    const screenName = params ? params.screenName : null;
    const contentArray = params ? content[screenName].content : null;

    return (
      <ImageBackground
        source={BackgroundImage}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <ScrollView style={styles.container}>
          <View style={{ marginBottom: 30 }}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>
                {content[screenName].heading}
              </Text>
              <Text style={styles.headerSubText}>
                {content[screenName].subHeading}
              </Text>
            </View>

            <View
              style={[
                // { backgroundColor: content[screenName].backgroundColor },
                styles.contentContainer
              ]}
            >
              {contentArray
                ? contentArray.map((item, index) => {
                    const separator =
                      index !== 0 ? <View style={styles.separator} /> : null;
                    return (
                      <View key={index}>
                        {separator}
                        <Text style={styles.contentText}>
                          <Text style={{ fontWeight: "bold" }}>
                            {index + 1}.)
                          </Text>{" "}
                          {item}
                        </Text>
                      </View>
                    );
                  })
                : null}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Timer", { screenName })
              }
              underlayColor={colors.white}
            >
              <Image
                style={styles.buttonImage}
                source={ButtonImage}
                resizeMode="cover"
              />
              <Text style={styles.buttonText}>Start sleeping!</Text>
            </TouchableOpacity>

            <Button
              title="Back to home"
              color={colors.white}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: colors.blackBlue
      },
      headerTintColor: colors.white,
      headerRight: (
        <Button
          onPress={() =>
            navigation.navigate("Timer", {
              screenName: navigation.state.params.screenName
            })
          }
          color={colors.white}
          title="Start "
        />
      )
    };
  };
}

export default DetailsScreen;
