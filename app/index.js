import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import { Stack, useRouter } from "expo-router";
import { Home } from "../components";

const LandingPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: COLORS.background }} >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Home />
    </SafeAreaView>
  );
};

export default LandingPage;
