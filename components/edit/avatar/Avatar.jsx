import { StyleSheet, Image, Pressable, View, Text } from "react-native";
import { useState } from "react";
import { useGlobalContext } from "../../../Context/store";
import * as ImagePicker from "expo-image-picker";
import sharedStyles from "../edit.style";
import UpdateButton from "../../shared/UpdateButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const Avatar = () => {
  const router = useRouter();
  const { avatar, setAvatar } = useGlobalContext();
  const [selectedImage, setSelectedImage] = useState(avatar);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  const handlePress = () => {
    setAvatar(selectedImage);
    router.back();
  }
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.header}>Upload a photo of yourself:</Text>
      <Pressable onPress={pickImageAsync}>
        {selectedImage.length == 0 ? (
          <View style={styles.icon}>
            <FontAwesome
              name="user"
              size={250}
              color="white"
            />
          </View>
        ) : (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </Pressable>
      <UpdateButton handlePress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  icon: {
    backgroundColor: "black",
    width: 250,
    height: 250,
    alignItems: "center",
  }
});

export default Avatar;
