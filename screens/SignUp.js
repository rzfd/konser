import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/group-2243.png")}
      />
      <Text style={styles.signUp}>Sign Up</Text>
      <Text style={[styles.createAnAccount, styles.signUp1Typo]}>
        Create an account to search for the concert of your choice
      </Text>
      <View style={styles.alreadyHaveAnAccountLogiParent}>
        <Text style={styles.alreadyHaveAnContainer}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already Have an Account ?  `}</Text>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </Text>
        <Pressable
          style={styles.signUpWrapper}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Text style={[styles.signUp1, styles.loginTypo]}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <View>
          <View style={styles.formLayout}>
            <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          </View>
          <View style={[styles.formConcert1, styles.formLayout]}>
            <Text style={[styles.email, styles.emailTypo]}>Password</Text>
          </View>
        </View>
        <Text style={[styles.lupaKataSandi, styles.emailTypo]}>
          Lupa Kata sandi?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
  },
  loginTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  emailTypo: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.subTextBgBlack,
  },
  formLayout: {
    width: 294,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
  },
  androidLarge2Child: {
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
  signUp: {
    top: 56,
    fontSize: FontSize.size_45xl,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.bgFbfbfb,
    textTransform: "capitalize",
    left: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  createAnAccount: {
    top: 153,
    lineHeight: 26,
    fontFamily: FontFamily.poppinsRegular,
    width: 303,
    height: 51,
    color: Color.subTextBgBlack,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    left: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.nunitoSemibold,
    fontWeight: "600",
    color: Color.subTextBgBlack,
  },
  login: {
    color: Color.mediumvioletred,
  },
  alreadyHaveAnContainer: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
  },
  signUp1: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.bgFbfbfb,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  signUpWrapper: {
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
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  alreadyHaveAnAccountLogiParent: {
    top: 660,
    left: 33,
    alignItems: "center",
    position: "absolute",
  },
  email: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  formConcert1: {
    marginTop: 20,
  },
  lupaKataSandi: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    marginTop: 26,
  },
  frameParent: {
    top: 268,
    left: 32,
    alignItems: "flex-end",
    position: "absolute",
  },
  androidLarge2: {
    backgroundColor: Color.bg121212,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignUp;
