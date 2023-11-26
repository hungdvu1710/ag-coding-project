import React from "react";
import { View, StyleSheet } from "react-native";
import { useGlobalContext } from "../../Context/store";
import InfoBar from "../shared/InfoBar";
import AvatarDisplay from "../shared/AvatarDisplay";
import { COLORS } from "../../constants";

const Home = () => {
  const { firstName, lastName, bio, phone, email, avatar } = useGlobalContext();
  return (
    <View style={styles.container}>
      <AvatarDisplay />
      <InfoBar title="Name" data={firstName + " " + lastName} slug="name" />
      <InfoBar title="Phone" data={phone} slug="phone" />
      <InfoBar title="Email" data={email} slug="email" />
      <InfoBar title="Tell us about yourself" data={bio} slug="bio" />
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
