import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ConfirmationScreen = ({ route, navigation }) => {
  const { item, name, email, phone } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Popular1"); // Navigate to "Popular1" screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation Screen</Text>
      <Text style={styles.confirmationText}>Thank you for your purchase!</Text>
      <Text style={styles.ticketInfo}>Ticket: {item.name}</Text>
      <Text style={styles.label}>Name: {name}</Text>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Phone: {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.p_base,
    backgroundColor: Color.bg121212,
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.bgFbfbfb,
    marginBottom: 16,
  },
  confirmationText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bgFbfbfb,
    marginBottom: 24,
  },
  ticketInfo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bgFbfbfb,
    marginBottom: 8,
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.bgFbfbfb,
    marginBottom: 8,
  },
});

export default ConfirmationScreen;
