import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Popular1 = () => {
  return (
    <View style={styles.popular}>
      <View style={[styles.popularChild, styles.popularChildPosition]} />
      <View style={styles.bestSellingConcertsAtTheMParent}>
        <Text style={[styles.bestSellingConcertsAt, styles.chooseTheTypo]}>
          best-selling concerts at the moment
        </Text>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
          <Text style={[styles.chooseThe, styles.chooseTheTypo]}>
            Choose the
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text style={styles.theWeek}>The Week - After down</Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <View style={[styles.groupItem, styles.groupBorder]} />
            <Text style={[styles.tuesdayJune4, styles.artistTypo1]}>
              Tuesday, June 4
            </Text>
            <Text style={[styles.malaysia, styles.artistTypo1]}>Malaysia</Text>
          </View>
        </View>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
          <Text style={styles.theWeek}>The Week - After down</Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <View style={[styles.groupItem, styles.groupBorder]} />
            <Text style={[styles.tuesdayJune4, styles.artistTypo1]}>
              Tuesday, June 4
            </Text>
            <Text style={[styles.malaysia, styles.artistTypo1]}>Malaysia</Text>
          </View>
        </View>
      </View>
      <View style={styles.popularItem} />
      <View style={[styles.popularConcertParent, styles.parentFlexBox]}>
        <Text style={[styles.popularConcert, styles.artistTypo]}>
          Popular concert
        </Text>
        <Text style={[styles.artist, styles.artistTypo]}>Artist</Text>
        <Text style={[styles.artist, styles.artistTypo]}>Upcoming</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popularChildPosition: {
    top: 0,
    left: 0,
  },
  chooseTheTypo: {
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  parentFlexBox: {
    flexDirection: "row",
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
  artistTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  artistTypo: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  popularChild: {
    backgroundColor: Color.midnightblue,
    height: 274,
    width: 360,
    left: 0,
    position: "absolute",
  },
  bestSellingConcertsAt: {
    top: 40,
    fontSize: FontSize.size_23xl,
    lineHeight: 50,
    width: 294,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    width: 19,
    height: 6,
  },
  chooseThe: {
    fontSize: FontSize.size_21xl,
    lineHeight: 40,
    width: 279,
    marginLeft: 10,
  },
  vectorParent: {
    alignItems: "center",
    left: 0,
    top: 0,
  },
  bestSellingConcertsAtTheMParent: {
    top: 56,
    left: 33,
    width: 308,
    height: 190,
    position: "absolute",
  },
  frameItem: {
    height: 166,
    borderRadius: Border.br_xl,
    width: 360,
  },
  theWeek: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 287,
    marginTop: 16,
    color: Color.bg121212,
    textAlign: "left",
    letterSpacing: 0,
  },
  groupChild: {
    width: 180,
    left: 0,
  },
  groupItem: {
    left: 179,
    width: 181,
  },
  tuesdayJune4: {
    left: 23,
    width: 132,
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    top: 17,
    fontWeight: "500",
    color: Color.bg121212,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  malaysia: {
    left: 235,
    width: 73,
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    top: 17,
    fontWeight: "500",
    color: Color.bg121212,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleGroup: {
    height: 50,
    marginTop: 16,
    width: 360,
  },
  rectangleParent: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  frameParent: {
    top: 374,
    left: 0,
    position: "absolute",
  },
  popularItem: {
    top: 276,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 98,
    width: 360,
    left: 0,
    position: "absolute",
    backgroundColor: Color.bg121212,
  },
  popularConcert: {
    color: Color.bgFbfbfb,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  artist: {
    color: Color.subTextBgWhite,
    marginLeft: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  popularConcertParent: {
    marginLeft: -150,
    top: 311,
    left: "50%",
  },
  popular: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.bg121212,
  },
});

export default Popular1;
