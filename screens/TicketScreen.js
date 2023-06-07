import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { Picker } from "@react-native-picker/picker";

const TicketScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePayment = () => {
    // Perform payment logic or other actions here
    // For example, send payment data to a backend or display a payment confirmation

    // Navigate to the payment confirmation screen
    navigation.navigate("ConfirmScreen", { item, name, email, phone, paymentMethod });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Payment Screen</Text>
        <Text style={styles.ticketInfo}>Ticket: {item.name}</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Payment Method</Text>
        <Picker
          selectedValue={paymentMethod}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Credit Card" value="Credit Card" />
          <Picker.Item label="PayPal" value="PayPal" />
          <Picker.Item label="Bank Transfer" value="Bank Transfer" />
        </Picker>
        <Pressable style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    top: 40,
  },
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
  ticketInfo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bgFbfbfb,
    marginBottom: 24,
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.bgFbfbfb,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Color.bgFbfbfb,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: Color.bg121212,
    fontFamily: FontFamily.poppinsRegular,
  },
  picker: {
    backgroundColor: Color.bgFbfbfb,
    borderRadius: 8,
    marginBottom: 16,
    color: Color.bg121212,
  },
  button: {
    backgroundColor: Color.mediumvioletred,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoBold,
    color: Color.bgFbfbfb,
  },
});

export default TicketScreen;
