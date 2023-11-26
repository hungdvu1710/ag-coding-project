import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useGlobalContext } from "../../../Context/store";
import { UpdateButton } from "../../shared/UpdateButton";
import { useRouter } from "expo-router";
import sharedStyles from "../edit.style";

const Phone = () => {
  const { phone, setPhone } = useGlobalContext();
  const [currPhone, setCurrPhone] = useState(phone);
  const router = useRouter();
  const handlePress = () => {
    setPhone(currPhone);
    router.back();
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>What's your phone number?</Text>
      <View style={sharedStyles.inputWrapper}>
        <Text style={sharedStyles.label}>Your phone number</Text>
        <TextInput
          value={currPhone}
          onChangeText={(text) => setCurrPhone(text)}
          keyboardType="phone-pad"
          placeholder="Enter your phone number"
          textContentType="telephoneNumber"
          style={sharedStyles.input}
        />
      </View>
      <UpdateButton handlePress={handlePress} />
    </View>
  );
};

export default Phone;
