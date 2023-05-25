import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Artist = () => {
  return (
    <View style={styles.artist}>
      <View style={[styles.artistChild, styles.artistPosition]} />
      <View style={styles.favoriteArtistYouWantToSeParent}>
        <Text style={[styles.favoriteArtistYou, styles.chooseTheTypo]}>
          Favorite artist you want to see
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
      <View style={[styles.artistItem, styles.artistPosition]} />
      <View style={[styles.popularConcertParent, styles.parentFlexBox]}>
        <Text style={styles.popularConcert}>Popular concert</Text>
        <Text style={[styles.artist1, styles.artist1Typo]}>Artist</Text>
        <Text style={[styles.upcoming, styles.artist1Typo]}>Upcoming</Text>
      </View>
      <View style={[styles.artistInner, styles.artistPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  artistPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  chooseTheTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  artist1Typo: {
    marginLeft: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  artistChild: {
    backgroundColor: Color.midnightblue,
    height: 274,
    top: 0,
  },
  favoriteArtistYou: {
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
  favoriteArtistYouWantToSeParent: {
    top: 56,
    left: 33,
    width: 308,
    height: 190,
    position: "absolute",
  },
  artistItem: {
    top: 276,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 98,
    backgroundColor: Color.bg121212,
  },
  popularConcert: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    color: Color.subTextBgBlack,
    letterSpacing: 0,
  },
  artist1: {
    color: Color.bgFbfbfb,
  },
  upcoming: {
    color: Color.subTextBgBlack,
    marginLeft: 20,
  },
  popularConcertParent: {
    marginLeft: -148.5,
    top: 311,
    left: "50%",
  },
  artistInner: {
    top: 374,
    backgroundColor: Color.white,
    height: 426,
  },
  artist: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.bg121212,
  },
});

export default Artist;
