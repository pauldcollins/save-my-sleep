import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  colors: {
    darkBlue: "#162d50"
  },
  timer: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  timerText: {
    fontSize: 40,
    color: "#545455"
  },
  button: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.5,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});
