import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useGlobalContext } from "../../../Context/store";
import UpdateButton from "../../shared/UpdateButton";
import { useRouter } from "expo-router";
import sharedStyles from "../edit.style";

const Bio = () => {
  const { bio, setBio } = useGlobalContext();
  const [currBio, setCurrBio] = useState(bio);
  const router = useRouter();
  const handlePress = () => {
    setBio(currBio);
    router.back();
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>What type of passenger are you?</Text>
      <View style={sharedStyles.inputWrapper}>
        <TextInput
          value={currBio}
          onChangeText={(text) => setCurrBio(text)}
          multiline={true}
          keyboardType="default"
          placeholder="Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc."
          textContentType="emailAddress"
          style={[sharedStyles.input, {height: 200}]}
        />
      </View>
      <UpdateButton handlePress={handlePress} />
    </View>
  );
};

export default Bio;
