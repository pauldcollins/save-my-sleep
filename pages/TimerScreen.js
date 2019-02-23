import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from "react-native";
import StopWatch from "./StopWatchComponent";
import { StackNavigator } from "react-navigation";

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
    // const screenName = params ? params.screenName : null;
    const screenName = "the878Method";
    const contentArray = params ? content[screenName].content : null;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{content[screenName].heading}</Text>
          <Text style={styles.headerSubText}>
            {content[screenName].subHeading}
          </Text>
        </View>

        <View
          style={[
            { backgroundColor: content[screenName].backgroundColor },
            styles.contentContainer
          ]}
        >
          <StopWatch
            screenName={screenName}
            handleGetCurrentTime={this.handleGetCurrentTime}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back to home</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingBottom: 30
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
    color: "#545455",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

export default TimerScreen;
