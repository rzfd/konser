import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Popular = () => {
  return (
    <View style={styles.popular}>
      <View style={[styles.popularChild, styles.popularPosition]} />
      <View style={[styles.popularItem, styles.popularPosition]} />
      <Text style={[styles.theWeek, styles.theFlexBox]}>
        The Week - After down
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        />
        <Text style={[styles.theWeek1, styles.theFlexBox]}>
          The Week - After down
        </Text>
      </View>
      <Image
        style={[styles.popularInner, styles.popularPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <View style={styles.rectanglePosition}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.tuesdayJune4, styles.malaysiaTypo]}>
          Tuesday, June 4
        </Text>
        <Text style={[styles.malaysia, styles.malaysiaTypo]}>Malaysia</Text>
      </View>
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id diam lectus
        euismod tellus aenean. Pulvinar nullam enim urna, meget Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Id diam lectus euismod
        tellus aenean. Pulvinar nulla
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  popularPosition: {
    width: 360,
    position: "absolute",
    left: 0,
  },
  theFlexBox: {
    textAlign: "left",
    color: Color.bgFbfbfb,
  },
  rectanglePosition: {
    height: 50,
    top: 480,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#121212",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 50,
    top: 0,
    position: "absolute",
  },
  malaysiaTypo: {
    color: Color.bg121212,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    top: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  popularChild: {
    height: 130,
    top: 0,
    width: 360,
    position: "absolute",
    backgroundColor: Color.bg121212,
  },
  popularItem: {
    top: 367,
    backgroundColor: Color.midnightblue,
    height: 113,
    width: 360,
    position: "absolute",
  },
  theWeek: {
    top: 385,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 287,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.bgFbfbfb,
    left: 33,
    position: "absolute",
  },
  frameChild: {
    width: 19,
    height: 6,
  },
  theWeek1: {
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    marginLeft: 14,
  },
  vectorParent: {
    top: 56,
    flexDirection: "row",
    alignItems: "center",
    left: 33,
    position: "absolute",
  },
  popularInner: {
    top: 127,
    height: 240,
    width: 360,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.bgFbfbfb,
  },
  groupChild: {
    width: 180,
    left: 0,
    borderColor: "#121212",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    left: 179,
    width: 181,
  },
  tuesdayJune4: {
    left: 23,
    width: 132,
  },
  malaysia: {
    left: 235,
    width: 73,
  },
  loremIpsumDolor: {
    top: 550,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 120,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bgFbfbfb,
    letterSpacing: 0,
    left: 33,
    position: "absolute",
  },
  popular: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.bg121212,
  },
});

export default Popular;
