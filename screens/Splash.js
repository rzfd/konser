import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import GetStarted from "../components/GetStarted";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.androidLarge1}>
      <Text style={[styles.areYouReady, styles.areYouReadyText]}>
        Are you ready ? To Enjoy every events
      </Text>
      <Text style={[styles.findForEvents, styles.areYouReadyText]}>
        Find for events that are happening so you don't miss the fun part
      </Text>
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
      <GetStarted />
    </View>
  );
};

const styles = StyleSheet.create({
  areYouReadyText: {
    textAlign: "left",
    textTransform: "capitalize",
    left: "50%",
    position: "absolute",
  },
  areYouReady: {
    marginLeft: -153,
    top: 56,
    fontSize: FontSize.size_45xl,
    letterSpacing: -1,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    color: Color.bgFbfbfb,
    width: 329,
    height: 374,
  },
  findForEvents: {
    marginLeft: -147,
    top: 466,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 26,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.subTextBgBlack,
    width: 303,
    height: 51,
  },
  androidLarge1Child: {
    top: 231,
    left: 211,
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
