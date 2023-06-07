import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, SafeAreaView, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const handleLogin = () => {
    if (email.length == 0) {
      alert("Please Enter Email");
    } else if (password.length == 0) {
      alert("Please Enter Password");
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          navigation.navigate("Popular1");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
          setLoading(false);
          // ..
        });
    }
  };

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
      <View style = {[styles.formRegister, styles.formRegisterPosition]}>
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
          onPress={handleLogin}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.gray_100,
    marginTop: 15,
    borderRadius: 9,
    marginLeft: 10,
    paddingVertical: 10,
    width: "80%",
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
    width: "80%",
    paddingLeft: 10,
    color: Color.bgFbfbfb
  },
  formRegisterPosition: {
    top: 230,
    left: 30,
  },
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
