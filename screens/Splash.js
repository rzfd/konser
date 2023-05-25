import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Splash= () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.androidLarge1}>
      <Text style={styles.areYouReady}>
        Are you ready ? To Enjoy every events
      </Text>
      <Text style={[styles.findForEvents, styles.getStartedTypo]}>
        Find for events that are happening so you don't miss the fun part
      </Text>
      <Pressable
        style={styles.getStartedWrapper}
        accessible="true"
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Get Started
        </Text>
      </Pressable>
      <Image
        style={styles.androidLarge1Child}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.androidLarge1Item}
        contentFit="cover"
        source={require("../assets/group-223.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  getStartedTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  areYouReady: {
    marginLeft: -153,
    top: 56,
    fontSize: FontSize.size_45xl,
    letterSpacing: -1,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 329,
    height: 374,
    textAlign: "left",
    color: Color.bgFbfbfb,
    textTransform: "capitalize",
    left: "50%",
    position: "absolute",
  },
  findForEvents: {
    marginLeft: -147,
    top: 466,
    lineHeight: 26,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.subTextBgBlack,
    width: 303,
    height: 51,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    left: "50%",
    position: "absolute",
  },
  getStarted: {
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.bgFbfbfb,
    fontSize: FontSize.size_base,
  },
  getStartedWrapper: {
    top: 695,
    left: 33,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.mediumvioletred,
    shadowColor: "rgba(46, 142, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 295,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  androidLarge1Child: {
    top: 223,
    left: 218,
    width: 45,
    height: 45,
    position: "absolute",
  },
  androidLarge1Item: {
    height: "98.59%",
    width: "182.27%",
    top: "0%",
    right: "-82.27%",
    bottom: "1.41%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge1: {
    backgroundColor: Color.bg121212,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splash;
