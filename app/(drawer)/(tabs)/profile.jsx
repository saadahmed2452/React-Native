// app/(tabs)/profile.js
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const router = useRouter(); // Initialize router

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear tokens, user data)
    alert("Logging out...");
    router.replace("/Login"); // Redirect to login screen after logout
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "You need to enable media permissions to pick an image."
      );
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (
      !pickerResult.canceled &&
      pickerResult.assets &&
      pickerResult.assets[0]?.uri
    ) {
      setProfileImage(pickerResult.assets[0]?.uri);
    } else {
      Alert.alert("No image selected", "Please select a valid image.");
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "You need to enable camera permissions to take a photo."
      );
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (
      !cameraResult.canceled &&
      cameraResult.assets &&
      cameraResult.assets[0]?.uri
    ) {
      setProfileImage(cameraResult.assets[0]?.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              profileImage ||
              "https://static.vecteezy.com/system/resources/previews/026/619/142/original/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg",
          }}
          style={styles.profileImage}
        />

        <TouchableOpacity
          style={styles.cameraIconContainer}
          onPress={() => {
            Alert.alert("Pick or Capture", "Choose a Method", [
              {
                text: "Pick Image From Gallery",
                onPress: pickImage,
              },
              {
                text: "Take a Photo",
                onPress: takePhoto,
              },
              { text: "Cancel", style: "cancel" },
            ]);
          }}
        >
          <MaterialIcons name="camera-alt" size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>This is your public profile page.</Text>

      {/* <View style={styles.buttonsContainer}>
        <Button title="Pick Image from Gallery" onPress={pickImage} />
        <Button title="Take a Photo" onPress={takePhoto} />
      </View> */}
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD", // Light blue
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative", // For absolute positioning of the camera icon
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    marginBottom: 20,
    borderColor: "white",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    padding: 5,
    borderRadius: 50,
  },
  buttonsContainer: {
    width: "50%",
    marginBottom: 20,
  },
});

// import React from 'react';
// import { Button, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const TestApp = () => {
//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted) {
//       const pickerResult = await ImagePicker.launchImageLibraryAsync();
//       if (!pickerResult.canceled) {
//         Alert.alert('Image picked', pickerResult.uri);
//       } else {
//         Alert.alert('No image selected');
//       }
//     } else {
//       Alert.alert('Permission required', 'You need to enable media permissions.');
//     }
//   };

//   return <Button title="Pick Image" onPress={pickImage} />;
// };

// export default TestApp;

// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
// import { useRouter } from "expo-router";
// import * as ImagePicker from "expo-image-picker"; // Image picker for gallery and camera

// const ProfileScreen = () => {
//   const [profileImage, setProfileImage] = useState(null); // State to hold the selected image URI
//   const router = useRouter(); // Router to handle navigation

//   const handleLogout = () => {
//     alert("Logging out...");
//     router.replace("/Login"); // Redirect to login screen after logout
//   };

//   // Pick image from gallery
//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert(
//         "Permission required",
//         "You need to enable media permissions to pick an image."
//       );
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images, // Limit to images
//       allowsEditing: true, // Allow cropping/editing
//       aspect: [4, 3], // Aspect ratio for the crop
//       quality: 1, // Highest quality
//     });

//     console.log("Picker result:", pickerResult);

//     if (!pickerResult.canceled && pickerResult.assets && pickerResult.assets[0]?.uri) {
//       setProfileImage(pickerResult.assets[0].uri); // Set the image URI in state
//     } else {
//       Alert.alert("No image selected", "Please select a valid image.");
//     }
//   };

//   // Take a photo using the camera
//   const takePhoto = async () => {
//     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert(
//         "Permission required",
//         "You need to enable camera permissions to take a photo."
//       );
//       return;
//     }

//     const cameraResult = await ImagePicker.launchCameraAsync({
//       allowsEditing: true, // Allow cropping/editing
//       aspect: [1, 1], // Square aspect ratio
//       quality: 1, // Highest quality
//     });

//     console.log("Camera result:", cameraResult);

//     if (!cameraResult.canceled && cameraResult.assets && cameraResult.assets[0]?.uri) {
//       setProfileImage(cameraResult.assets[0].uri); // Set the photo URI in state
//     } else {
//       Alert.alert("No photo taken", "Please take a valid photo.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profile</Text>
//       <Text style={styles.subtitle}>This is your public profile page.</Text>

//       {/* Display selected image */}
//       {profileImage ? (
//         <Image source={{ uri: profileImage }} style={styles.profileImage} />
//       ) : (
//         <Text>No profile image selected</Text>
//       )}

//       <View style={styles.buttonsContainer}>
//         <Button title="Pick Image from Gallery" onPress={pickImage} />
//         <Button title="Take a Photo" onPress={takePhoto} />
//       </View>

//       <Button title="Logout" onPress={handleLogout} color="red" />
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#E3F2FD", // Light blue
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50, // Makes the image circular
//     marginBottom: 20,
//   },
//   buttonsContainer: {
//     width: "50%",
//     marginBottom: 20,
//   },
// });
