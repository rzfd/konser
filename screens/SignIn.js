import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
      <Image
        style={styles.androidLarge3Child}
        contentFit="cover"
        source={require("../assets/group-2242.png")}
      />
      <Text style={[styles.signIn, styles.signInFlexBox]}>Sign In</Text>
      <Text style={styles.enterYourAccount}>
        Enter your account, enjoy the concert of your choice
      </Text>
      <View style={[styles.formConcert, styles.formSpaceBlock]}>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <View style={[styles.formConcert1, styles.formSpaceBlock]}>
        <Text style={[styles.email, styles.emailTypo]}>Password</Text>
      </View>
      <View style={styles.dontHaveAnAccountSignUpParent}>
        <Text style={[styles.dontHaveAnContainer, styles.signInFlexBox]}>
          <Text
            style={[styles.dontHaveAn, styles.emailTypo]}
          >{`Dont Have an Account  ?  `}</Text>
          <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
        </Text>
        <Pressable
          style={[styles.signUpWrapper, styles.formSpaceBlock]}
          onPress={() => navigation.navigate("Popular1")}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  formSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
  },
  emailTypo: {
    fontWeight: "600",
    color: Color.subTextBgBlack,
  },
  signTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  androidLarge3Child: {
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
  signIn: {
    top: 56,
    fontSize: FontSize.size_45xl,
    lineHeight: 77,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    color: Color.bgFbfbfb,
    textTransform: "capitalize",
    left: "50%",
    marginLeft: -153,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  enterYourAccount: {
    top: 153,
    lineHeight: 26,
    fontFamily: FontFamily.poppinsRegular,
    width: 303,
    height: 51,
    color: Color.subTextBgBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    textTransform: "capitalize",
    letterSpacing: 0,
    left: "50%",
    marginLeft: -153,
    position: "absolute",
  },
  email: {
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  formConcert: {
    marginLeft: -147,
    top: 268,
    width: 294,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  formConcert1: {
    marginLeft: -148,
    top: 346,
    width: 294,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.nunitoSemibold,
  },
  signUp: {
    color: Color.mediumvioletred,
  },
  dontHaveAnContainer: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
  },
  signUp1: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.bgFbfbfb,
    letterSpacing: 0,
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
    alignItems: "center",
  },
  dontHaveAnAccountSignUpParent: {
    top: 660,
    left: 33,
    alignItems: "center",
    position: "absolute",
  },
  androidLarge3: {
    backgroundColor: Color.bg121212,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignIn;
