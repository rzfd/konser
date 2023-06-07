import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";

const Popular = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleGetTickets = () => {
    navigation.navigate("TicketScreen", { item });
  };


  return (
    <View style={styles.popular111}>
      <ScrollView
        style={[styles.loremIpsumDolorSitAmetCoWrapper, styles.theWeekPosition]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Text style={[styles.loremIpsumDolor, styles.theWeekFlexBox]}
        >{item.desc}</Text>
      </ScrollView>
      <View style={[styles.groupParent, styles.frameInnerPosition]}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.theWeek, styles.theWeekFlexBox]}>
            {item.name}
          </Text>
        </View>
        <View style={styles.frameChildPosition}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/arrow-11.png")}
              onPress
            />
            <Text style={[styles.popularConcert, styles.getTicketsTypo]}>
              Popular Concert
            </Text>
          </View>
        </View>
        <Image
          style={[styles.frameInner, styles.frameInnerPosition]}
          contentFit="cover"
          source={{ uri: item.image }}
        />
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupInnerBorder]} />
            <View style={[styles.rectangleView, styles.groupInnerBorder]} />
            <Text style={[styles.tuesdayJune4, styles.malaysiaTypo]}>
              {item.lokasi}
            </Text>
            <Text style={[styles.malaysia, styles.malaysiaTypo]}>{item.date}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <Text style={styles.price}>{item.price}</Text>
          <Pressable
              style={[styles.getTicketsWrapper, styles.groupContainerLayout]}
              onPress={handleGetTickets}
            >
              <Text style={[styles.getTickets, styles.getTicketsTypo]}>
                Get Tickets
              </Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    color: Color.bgFbfbfb,
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: FontSize.size_3xl,
    top : 15
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  theWeekPosition: {
    left: 33,
    position: "absolute",
  },
  theWeekFlexBox: {
    textAlign: "left",
    color: Color.bgFbfbfb,
    letterSpacing: 0,
  },
  frameInnerPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 113,
    width: 400,
    left: 0,
    position: "absolute",
  },
  frameChildPosition: {
    height: 130,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  getTicketsTypo: {
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
    color: Color.bgFbfbfb,
  },
  groupLayout: {
    height: 50,
    width: 400,
    left: 0,
    position: "absolute",
  },
  groupInnerBorder: {
    borderWidth: 1,
    borderColor: "#121212",
    borderStyle: "solid",
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
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  frameLayout: {
    height: 80,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupContainerLayout: {
    height: 55,
    position: "absolute",
  },
  loremIpsumDolor: {
    left: 20,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 160,
    fontSize: FontSize.size_smi,
    color: Color.bgFbfbfb,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    top: 550,
    flex: 1,
  },
  groupChild: {
    backgroundColor: Color.midnightblue,
    top: 0,
  },
  theWeek: {
    top: 18,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    width: 287,
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
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: FontFamily.poppinsBold,
    marginLeft: 14,
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
  groupItem: {
    backgroundColor: Color.bgFbfbfb,
    top: 0,
  },
  groupInner: {
    width: 200,
    left: 0,
    borderWidth: 1,
    borderColor: "#121212",
    borderStyle: "solid",
  },
  rectangleView: {
    left: 200,
    width: 201,
  },
  tuesdayJune4: {
    left: 23,
    width: 132,
  },
  malaysia: {
    left: 235,
    width: 100,
  },
  groupView: {
    top: 0,
  },
  rectangleContainer: {
    top: 480,
  },
  groupParent: {
    height: 530,
    top: 0,
  },
  frameChild1: {
    top: 0,
    backgroundColor: Color.bg121212,
  },
  getTickets: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoBold,
    letterSpacing: 0,
    lineHeight: 24,
  },
  getTicketsWrapper: {
    left: 84,
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
    width: 211,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  groupContainer: {
    top: 7,
    left: 32,
    width: 295,
  },
  frameView: {
    top: 720,
  },
  popular111: {
    width: "100%",
    height: 800,
    flex: 1,
    backgroundColor: Color.bg121212,
  },
});

export default Popular;
