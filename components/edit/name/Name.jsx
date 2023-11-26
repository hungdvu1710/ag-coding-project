import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useGlobalContext } from "../../../Context/store";
import { UpdateButton } from "../../shared/UpdateButton";
import { useRouter } from "expo-router";
import sharedStyles from "../edit.style";
import { COLORS } from "../../../constants";

const Name = () => {
  const { firstName, setFirstName, lastName, setLastName } = useGlobalContext();
  const [currFirstName, setCurrFirstName] = useState(firstName);
  const [currLastName, setCurrLastName] = useState(lastName);
  const router = useRouter();
  const handlePress = () => {
    setFirstName(currFirstName);
    setLastName(currLastName);
    router.back();
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>What's your name?</Text>
      <View style={styles.inputGroup}>
        <View style={styles.inputWrapper}>
          <Text style={sharedStyles.label}>First Name</Text>
          <TextInput
            value={currFirstName}
            onChangeText={(text) => setCurrFirstName(text)}
            keyboardType="default"
            textContentType="givenName"
            style={sharedStyles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={sharedStyles.label}>Last Name</Text>
          <TextInput
            value={currLastName}
            onChangeText={(text) => setCurrLastName(text)}
            keyboardType="default"
            textContentType="familyName"
            style={sharedStyles.input}
          />
        </View>
      </View>

      <UpdateButton handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
  inputWrapper:{
    width: "45%",
    borderColor: COLORS.secondary,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 8,
  }
});

export default Name;
