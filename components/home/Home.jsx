import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGlobalContext } from "../../Context/store";
import InfoBar from "../shared/InfoBar";
import { COLORS } from "../../constants";

const Home = () => {
  const { name, bio, phone, email, avatar } = useGlobalContext();
  return (
    <View style={styles.container}>
      <InfoBar title="Name" data="My Name" />
      <InfoBar title="Phone" data="My Phone" />
      <InfoBar title="Email" data="My Email" />
      <InfoBar title="Tell us about yourself" data="My Bio" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  title: {
    color: COLORS.secondary,
  },
  data: {
    color: COLORS.primary,
  },
});

export default Home;
