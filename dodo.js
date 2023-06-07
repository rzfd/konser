import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Artisdetail = () => {
  return (
    <View style={styles.artisdetail}>
      <View style={[styles.groupParent, styles.frameInnerPosition]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.theWeek, styles.theWeekClr]}>
            The Week - After down
          </Text>
        </View>
        <View style={styles.frameChildPosition}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/arrow-11.png")}
            />
            <Text style={[styles.popularConcert, styles.theWeekClr]}>
              Popular Concert
            </Text>
          </View>
        </View>
        <Image
          style={[styles.frameInner, styles.frameInnerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={styles.frameViewFlexBox}>
            <View style={styles.rectangleView} />
            <Text style={styles.asdladadandalkdamdamsdna}>
              asdladadandalkdamda,msdna
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <View style={styles.rectangleView} />
            <Text style={styles.asdladadandalkdamdamsdna}>
              asdladadandalkdamda,msdna
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameInnerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 113,
    width: 360,
    left: 0,
    position: "absolute",
  },
  theWeekClr: {
    color: Color.bgFbfbfb,
    textAlign: "left",
  },
  frameChildPosition: {
    height: 130,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameViewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentPosition: {
    left: 33,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.midnightblue,
    top: 0,
  },
  theWeek: {
    top: 18,
    fontSize: FontSize.size_13xl,
    lineHeight: 38,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 287,
    textAlign: "left",
    letterSpacing: 0,
    left: 33,
    position: "absolute",
  },
  rectangleParent: {
    top: 367,
  },
  frameChild: {
    backgroundColor: Color.bg121212,
  },
  frameItem: {
    width: 19,
    height: 6,
  },
  popularConcert: {
    fontSize: FontSize.size_xl,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    marginLeft: 14,
    textAlign: "left",
  },
  vectorParent: {
    top: 56,
    left: 33,
    position: "absolute",
  },
  frameInner: {
    top: 127,
    height: 240,
  },
  rectangleView: {
    backgroundColor: Color.gainsboro,
    width: 76,
    height: 76,
  },
  asdladadandalkdamdamsdna: {
    fontSize: FontSize.size_smi,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    width: 195,
    height: 46,
    marginLeft: 16,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameView: {
    marginTop: 24,
  },
  frameParent: {
    top: 519,
  },
  groupParent: {
    height: 530,
    top: 0,
  },
  artisdetail: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: Color.bg121212,
  },
});

export default Artisdetail;
