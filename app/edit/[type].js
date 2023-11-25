import { Stack, useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants";
import React from "react";
import { Name, Phone, Avatar, Bio, Email } from "../../components";

const Edit = () => {
  const { type } = useSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      {type === "avatar" && <Avatar />}
      {type === "bio" && <Bio />}
      {type === "email" && <Email />}
      {type === "name" && <Name />}
      {type === "phone" && <Phone />}
    </SafeAreaView>
  );
};

export default Edit;
