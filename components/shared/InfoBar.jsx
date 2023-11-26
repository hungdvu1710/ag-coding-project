import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const InfoBar = ({ title, data, slug }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/edit/${slug}`);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.data} numberOfLines={5}>{data}</Text>
        </View>
        <FontAwesome
          name="angle-right"
          size={30}
          style={styles.buttonIcon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  title: {
    color: COLORS.secondary,
  },
  data: {
    color: COLORS.primary,
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 2,
  },
  buttonIcon: {
    color: COLORS.secondary,
  },
  contentWrapper: {
    maxWidth: "95%",
  }
});

export default InfoBar;
