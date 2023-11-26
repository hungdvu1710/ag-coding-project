import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const UpdateButton = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonWrapper} onPress={handlePress}>
        <Text style={styles.label}>Update</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "60%",
    width: "85%",
  },
  buttonWrapper: {
    backgroundColor: COLORS.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  label: {
    color: COLORS.buttonText,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default UpdateButton;
