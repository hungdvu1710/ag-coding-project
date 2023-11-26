import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useGlobalContext } from "../../../Context/store";
import { UpdateButton } from "../../shared/UpdateButton";
import { useRouter } from "expo-router";
import sharedStyles from "../edit.style";

const Email = () => {
  const { email, setEmail } = useGlobalContext();
  const [currMail, setCurrMail] = useState(email);
  const router = useRouter();
  const handlePress = () => {
    setEmail(currMail);
    router.back();
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>What's your email?</Text>
      <View style={sharedStyles.inputWrapper}>
        <Text style={sharedStyles.label}>Your email address</Text>
        <TextInput
          value={currMail}
          onChangeText={(text) => setCurrMail(text)}
          keyboardType="email-address"
          placeholder="Enter your email address"
          textContentType="emailAddress"
          style={sharedStyles.input}
        />
      </View>
      <UpdateButton handlePress={handlePress} />
    </View>
  );
};

export default Email;
