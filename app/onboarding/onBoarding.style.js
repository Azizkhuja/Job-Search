import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onboardingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  onboardingImage: {
    width: "100%",
    height: 300,
    marginTop: -90,
  },
  googleBtn: {
    width: 240,
    height: 52,
    // backgroundColor: "#4285f4",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  googleIconWrapper: {
    margin: 1,
    width: 50,
    height: 50,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  googleIcon: {
    marginTop: 11,
    marginLeft: 11,
    width: 30,
    height: 30,
  },
  btnText: {
    margin: 11,
    color: "#fff",
    fontSize: 18,
    fontFamily: "PSBold",
  },
});

export default styles;
