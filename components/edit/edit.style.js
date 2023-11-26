import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputWrapper: {
    width: "85%",
    borderColor: COLORS.secondary,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 8,
  },
  label: {
    color: COLORS.secondary,
    fontWeight: "bold",
    marginBottom: 5,
  },
  header: {
    color: COLORS.primary,
    fontSize: 30,
    marginBottom: 30,
    width: "85%",
    fontWeight: 500,
  },
  input: {
    color: COLORS.primary,
    fontWeight: "500",
  },
});

export default sharedStyles;