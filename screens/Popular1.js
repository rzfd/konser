import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import listartis from "../data/list_artis.json";

const Artist = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    // Navigate to the detail screen passing the item data
    navigation.navigate("Detil", { item });
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
        {listartis.map((artist) => (
          artist.exercises.map((item, index) => (
            <Pressable key={index} style={styles.detil} onPress={() => handlePress(item)}>
              <Image style={styles.frameChild} source={{ uri: item.image }} />
              <Text style={styles.theWeek}>{item.name}</Text>
              <View style={styles.rectangleGroup}>
                <View style={[styles.groupChild, styles.groupBorder]} />
                <Text numberOfLines={1} style={[styles.tuesdayJune4, styles.malaysiaTypo]}>{item.name}</Text>
                <Text style={[styles.malaysia, styles.negaraTypo]}>{item.desc}</Text>
              </View>
            </Pressable>
          ))
        ))}
      </ScrollView>
    </View>
  );
};


export default Artist;

const styles = StyleSheet.create({
  malaysia: {
    left: 235,
    width: 73,
  },
  tuesdayJune4: {
    paddingTop: 14,
    paddingLeft: 14,  
    left: 23,
    width: 132,
  },
  groupChild: {
    width: 200,
    left: -5,
  },
  rectangleGroup: {
    height: 50,
    marginTop: 696,
    width: 360,
  },
  negaraTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    color: Color.bg121212,
    letterSpacing: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: Border.br_3xs,
    paddingTop: 8,
    width: 200,
    height: 50,
    left: 200,
    paddingLeft: 50,
    paddingTop: 15,
  },
  malaysiaTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    top: 1,
    paddingLeft: 50,
    color: Color.bg121212,
    letterSpacing: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: Border.br_3xs,
    paddingVertical: 4,
    width: 200,
    height: 50,
    left: 0,
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
    color: Color.bgFbfbfb,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  artist: {
    color: Color.subTextBgWhite,
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