import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";

// content
import * as content from "./content";

class DetailsScreen extends React.Component {
  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    const screenName = params ? params.screenName : null;
    const contentArray = params ? content[screenName].content : null;

    return (
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 30 }}>
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
            underlayColor="#fff"
          >
            <Text style={styles.buttonText}>Start sleeping!</Text>
          </TouchableOpacity>

          <Button
            title="Back to home"
            color="grey"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    flex: 3,
    paddingVertical: 10
  },
  contentText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "left",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#FFF",
    opacity: 0.3
  },
  button: {
    marginHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});

export default DetailsScreen;
