import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";

const Popular = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
  
    // Rest of the code...
  }

const handleCategoryChange = (category) => {
setSelectedCategory(category);
};

const handleNumberOfPeopleChange = (number) => {
setNumberOfPeople(number);
};

return (
    <View style={styles.popular111}>
      {/* Rest of the code... */}
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={[styles.frameChild1, styles.frameLayout]} />
        <TouchableOpacity
          style={[styles.groupContainer, styles.groupContainerLayout]}
          onPress={() => setShowModal(true)}
        >
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-217.png")}
          />
          <View style={[styles.getTicketsWrapper, styles.groupContainerLayout]}>
            <Text style={[styles.getTickets, styles.getTicketsTypo]}>Get Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
  
      {/* Pop-up screen */}
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Dropdown category */}
          <Text style={styles.modalLabel}>Category:</Text>
          <DropdownComponent
            options={categoryOptions}
            selectedOption={selectedCategory}
            onOptionSelect={handleCategoryChange}
          />
  
          {/* Number of people */}
          <Text style={styles.modalLabel}>Number of People:</Text>
          <NumberInputComponent
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          />
  
          {/* Proceed to payment button */}
          <TouchableOpacity
            style={styles.proceedButton}
            onPress={() => {
              // Perform the payment process here
              // You can navigate to a payment screen or execute a payment API call
              // Once the payment is successful, you can close the modal
              setShowModal(false);
            }}
          >
            <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );

  
  