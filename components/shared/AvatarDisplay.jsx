import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/themed";
import { useGlobalContext } from "../../Context/store";

const AvatarDisplay = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/edit/avatar");
  };
  const { avatar } = useGlobalContext();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <View>
        {avatar.length == 0 ? (
          <Avatar
            size={100}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            onPress={handlePress}
            containerStyle={styles.avatarContainer}
          />
        ) : (
          <Avatar
            size={100}
            rounded
            source={{ uri: avatar }}
            onPress={handlePress}
            containerStyle={styles.avatarContainer}
          />
        )}

        <Pressable style={styles.editIcon} onPress={handlePress}>
          <MaterialCommunityIcons name="pencil" size={15} color={COLORS.blue} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editIcon: {
    position: "absolute",
    right: 0,
    top: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  avatarContainer: {
    borderColor: COLORS.blue,
    borderWidth: 5,
    backgroundColor: COLORS.primary,
  },
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  header: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AvatarDisplay;
