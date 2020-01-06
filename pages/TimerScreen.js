import React from "react";
import { Asset } from "expo";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Dimensions
} from "react-native";
import The878Method from "../components/The878Method";
import ProgressiveRelaxation from "../components/ProgressiveRelaxation";
import Accupressure from "../components/Accupressure";
import CountingBackwards from "../components/CountingBackwards";
import LeftNostrilBreathing from "../components/LeftNostrilBreathing";
import BackgroundImage from "../assets/images/564383.jpg";

import constants from "./../constants/styles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
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
    paddingBottom: 30
  },
  headerText: {
    fontSize: 30,
    color: constants.colors.white,
    textAlign: "center"
  },
  headerSubText: {
    fontSize: 20,
    color: constants.colors.white,
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 20
  },
  contentContainer: {
    flex: 10,
    paddingVertical: 10
  },
  footerContainer: {
    flex: 1
  },
  backButton: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.5,
    marginTop: 40,
    paddingVertical: 10
  },
  backButtonText: {
    color: constants.colors.darkBlue,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

// content
import * as content from "./content";

class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    const screenName = params ? params.screenName : null;
    // const contentArray = params ? content[screenName].content : null;
    let clockTimer;
    if (screenName === "the878Method") {
      clockTimer = <The878Method screenName={screenName} />;
    } else if (screenName === "progressiveRelaxation") {
      clockTimer = <ProgressiveRelaxation screenName={screenName} />;
    } else if (screenName === "accupressure") {
      clockTimer = <Accupressure screenName={screenName} />;
    } else if (screenName === "countingBackwards") {
      clockTimer = <CountingBackwards screenName={screenName} />;
    } else if (screenName === "leftNostrilBreathing") {
      clockTimer = <LeftNostrilBreathing screenName={screenName} />;
    }

    return (
      <ImageBackground
        source={BackgroundImage}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{content[screenName].heading}</Text>
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
            {clockTimer}
          </View>
          <View style={styles.footerContainer}>
            <TouchableHighlight
              style={styles.backButton}
              onPress={() => this.props.navigation.pop(2)}
            >
              <Text style={styles.backButtonText}>Back to home</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: constants.colors.blackBlue
      },
      headerTintColor: constants.colors.white
    };
  };
}

export default TimerScreen;
