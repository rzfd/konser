import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, SafeAreaView, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// android = 409123571512-02umcc0c8jcl7hqjni368eq3csuu6vpg.apps.googleusercontent.com

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState(""); 
  const navigation = useNavigation();

  const auth = getAuth();

  const handleSignUp = () => {
      if (name.length == 0) {
        alert("Please Enter Name");
      } else if (email.length == 0) {
        alert("Please Enter Email");
      } else if (password.length == 0) {
        alert("Please Enter Password");
      } else if (confirmPass.length == 0) {
        alert("Please Enter Confirm Password");
      } else if (password != confirmPass) {
        alert("Confirm Password does not match");
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigation.navigate("SignIn");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      }
    };

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
      <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.text, styles.textFlexBox]}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account? `}</Text>
            <Text style={[styles.loginNow, styles.loginNowTypo]}>
              Login now
            </Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.signUpWrapper}
          onPress={handleSignUp}
        >
          <Text style={[styles.signUp1, styles.loginTypo]}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <TextInput style={[styles.emailFocus]}
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          placeholder="Masukkan Email Anda"
          placeholderTextColor={Color.subTextBgBlack}
        />
        <TextInput style={[styles.passwordFocus]}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Masukkan Password Anda"
          placeholderTextColor={Color.subTextBgBlack}
        />
        <TextInput style={[styles.passwordFocus]}
          value={confirmPass}
          onChangeText={text => setConfirmPass(text)}
          secureTextEntry={true}
          placeholder="Masukkan Password Anda Kembali"
          placeholderTextColor={Color.subTextBgBlack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginNow: {
    color: Color.mediumvioletred,
  },
  loginNowTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  emailFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.gray_100,
    marginTop: 15,
    borderRadius: 9,
    marginLeft: 10,
    paddingVertical: 10,
    width: "100%",
    paddingLeft: 10,
    color: Color.bgFbfbfb
  },
  passwordFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.gray_100,
    marginTop: 15,
    borderRadius: 9,
    marginLeft: 10,
    paddingVertical: 10,
    width: "100%",
    paddingLeft: 10,
    color: Color.bgFbfbfb
  },
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
    width: 300,
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
    left: "15%",
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
