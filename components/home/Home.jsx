import React from "react";
import { View, StyleSheet } from "react-native";
import { useGlobalContext } from "../../Context/store";
import { InfoBar, AvatarDisplay } from "../index";
import { COLORS } from "../../constants";

const Home = () => {
  const { name, bio, phone, email, avatar } = useGlobalContext();
  return (
    <View style={styles.container}>
      <AvatarDisplay />
      <InfoBar title="Name" data="My Name" slug="name" />
      <InfoBar title="Phone" data="My Phone" slug="phone" />
      <InfoBar title="Email" data="My Email" slug="email" />
      <InfoBar title="Tell us about yourself" data="My Bio" slug="bio" />
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
