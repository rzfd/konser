import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import listartis from "../data/list_artis.json";

const Popular1 = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    // Navigate to the detail screen passing the item data
    navigation.navigate("ArtisDetil", { item});
  };

  return (
    <View style={styles.popular}>
      <View style={styles.choose}>
        <Text style={styles.title}>Choose the best-selling concerts at the moment</Text>
      </View>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => navigation.navigate("Popular1")}
        >
          <Text style={[styles.popularConcert, styles.artistTypo]}>Popular concert</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Artist")}
        >
        <Text style={[styles.artist, styles.artistTypo]}>Artist</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.content}>
        {listartis.map((item, index) => (
          <Pressable key={index} style={styles.detil} onPress={() => handlePress(item)}>
            <Image
              style={styles.frameChild}
              source={{ uri: item.image }}
            />
            <Text style={styles.theWeek}>{item.name}</Text>
            <View style={styles.rectangleGroup}>
              <View style={[styles.groupChild, styles.groupBorder]} />
              <Text style={[styles.tuesdayJune4, styles.malaysiaTypo]}>
                {item.jumlah}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  malaysiaTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    paddingLeft: 250,
    color: Color.bg121212,
    letterSpacing: 0,
    position: "absolute",
    width: "100%",
    marginTop: -25,
  },
  malaysia: {
    left: 235,
    width: 73,
  },
  tuesdayJune4: {
    paddingTop: 10,
    paddingLeft: 14,  
    width: "100%",
  },
  groupChild: {
    width: 200,
    left: -5,
  },
  rectangleGroup: {
    height: 50,
    width: 360,
  },
  theWeek: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 287,
    marginTop: 12,
    textAlign: "left",
    color: Color.bg121212,
    letterSpacing: 0,
    paddingLeft: 10,
  },
  frameChild: {
    height: 166,
    width: '120%',
  },
  detil: {
    width: '100%',
    height: 268,
    backgroundColor: Color.bgFbfbfb,  
  },
  content: {
    width: '100%',
    top: '12%',
  },  
  navbar: {
    flexDirection: "row",
    position: "absolute",
    left: 70,
    top: 360,
  },
  popularConcert: {
    color: Color.subTextBgWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  artist: {
    color: Color.bgFbfbfb,
    marginLeft: 80,
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  artistTypo: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  title: {
    marginRight: 80,
    left: 55,
    top: 55,
    fontSize:  FontSize.size_23xl,
    color: Color.white,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "900",
    textAlign: "left",
    letterSpacing: 0,
  },
  choose: {
    height: "40%",
    backgroundColor: Color.midnightblue,
  },
  popular: {
    height: "100%",
    backgroundColor: Color.bg121212,
  },
})

export default Popular1;