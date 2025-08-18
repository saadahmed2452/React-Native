// // my prac
// import {
//   View,
//   Text,
//   StyleSheet,

//   Button,
//   TextInput,
//   // TouchableOpacity,
//   // ScrollView,
//   // Pressable,
// } from "react-native";
// import React from "react";
// // import { Link } from "expo-router";
// // import Img from "@/assets/images/EA-2.jpeg";

// const index = () => {
//   return (
//     <View style={Styles.container}>
//       {/* <Text style={Styles.text}>Going to Learn React Native</Text>
//       <Text style={Styles.text}>Saad</Text> */}

//       <Button title="Click Me" onPress={() => alert("button clicked")} />
//       <View>
//         <Text>Enter Name</Text>
//         <TextInput placeholder="Enter here" style={Styles.ti} />
//       </View>

//       {/* <TouchableOpacity
//         onPress={() => alert("tepped")}
//         style={{ backgroundColor: "blue", padding: 10 }}
//       >
//         <Text>Custom Page</Text>
//       </TouchableOpacity> */}
//       {/* <Link href="/Login" style={{ marginHorizontal: "auto" }}>
//         <Pressable style={{ backgroundColor: "blue", padding: 10 }}>
//           <Text style={Styles.buttonText}>Login</Text>
//         </Pressable>
//       </Link> */}
//     </View>
//   );
// };

// export default index;

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//   },

//   text: {
//     color: "blue",
//     fontSize: 40,
//   },
//   button: {
//     fontSize: 10,
//     color: "black",
//   },
//   Img: {
//     width: 1000,
//     height: 1000,
//   },
//   ti: {
//     padding: 6,
//     borderWidth: 1,
//   },
//   tob: {
//     backgroundColor: "blue",
//     padding: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight:"bold"
//   }
// });

// app/index.js
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TextInput,
//   Pressable,
// } from "react-native";
// import React from "react";
// // import Img from "@/assets/images/EA-2.jpeg"; // Keep this commented or fix the alias later.
// import { Link, router } from 'expo-router'; // Import router from expo-router
// import { Redirect } from "expo-router";
// const IndexPage = () => { // Renamed from 'index' to 'IndexPage' for clarity, though 'index' as a component name is fine too.
//   return (
//     <View style={Styles.container}>
//       <Button title="Click Me" onPress={() => alert("button clicked")} />
//       <View>
//         <Text>Enter Name</Text>
//         <TextInput placeholder="Enter here" style={Styles.ti} />
//       </View>

//       {/* Use router.push() for navigation */}
//       <Link href= "/Login"
//         style={{ backgroundColor: "blue", padding: 10 }}
//       >
//         <Text style={Styles.buttonText}>Login</Text>
//       </Link>
//       <Pressable
//         style={{ backgroundColor: "blue", padding: 10 }}
//         onPress={() => router.push("/SignUp")} // Navigate to the '/Login' path
//       >
//         <Text style={Styles.buttonText}>SignUp</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default IndexPage;

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//   },
//   text: {
//     color: "blue",
//     fontSize: 40,
//   },
//   button: {
//     fontSize: 10,
//     color: "black",
//     borderRadius:10
//   },
//   Img: { // This style is for an Image component you're not currently rendering
//     width: 1000,
//     height: 1000,
//   },
//   ti: {
//     padding: 6,
//     borderWidth: 1,
//   },
//   tob: { // This style is for TouchableOpacity you're not currently rendering
//     backgroundColor: "blue",
//     padding: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight:"bold"
//   }
// });

//redirecting to login by defauld start page

import { Redirect } from "expo-router";
import React from "react";

const IndexPage = () => {
  return <Redirect href="/Login" />;
};

export default IndexPage;

// #kkmk
// c

// // App.tsx
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   Image,
//   ImageBackground,
// } from 'react-native';

// import bgImage from '@/assets/images/EA-2.jpeg'; // ✅ Correct way to import image

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={bgImage} style={styles.IB}>
//         <Text style={styles.title}>Welcome </Text>

//         <Image
//           source={bgImage}
//           style={styles.image}
//         />

//         <Button title="Press Me" onPress={() => alert('Button Pressed!')} />

//         <Text style={styles.footer}>React Native</Text>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: "center",
//     // alignItems: "center"
//   },
//   IB: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#fff',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginBottom: 20,
//   },
//   footer: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// d

// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Welcome to React Native!</Text>

//       <Image
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//         style={styles.image}
//       />

//       <Text>This is a simple text component.</Text>

//       <Button
//         title="Click Me"
//         onPress={() => alert('Button Pressed!')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center',     // Center horizontally
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginBottom: 20,
//   },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   Switch,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';

// export default function ComponentShowcase() {
//   const [inputValue, setInputValue] = useState('');
//   const [isEnabled, setIsEnabled] = useState(false);

//   const data = [
//     { id: '1', name: 'Apple' },
//     { id: '2', name: 'Banana' },
//     { id: '3', name: 'Cherry' },
//     { id: '4', name: 'Date' },
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Component Showcase</Text>

//       {/* TextInput */}
//       <TextInput
//         style={styles.input}
//         placeholder="Type something..."
//         value={inputValue}
//         onChangeText={setInputValue}
//       />
//       <Text>You typed: {inputValue}</Text>

//       {/* Switch */}
//       <View style={styles.switchRow}>
//         <Text>Enable Notifications:</Text>
//         <Switch value={isEnabled} onValueChange={setIsEnabled} />
//       </View>

//       {/* FlatList */}
//       <Text style={styles.subheading}>Fruits List (FlatList):</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={styles.listItem}>• {item.name}</Text>
//         )}
//       />

//       {/* TouchableOpacity */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Alert.alert('Custom Button', 'You tapped the button!')}
//       >
//         <Text style={styles.buttonText}>Custom Touchable Button</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subheading: {
//     fontSize: 18,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   input: {
//     borderColor: '#aaa',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   switchRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//   },
//   listItem: {
//     paddingVertical: 4,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 12,
//     borderRadius: 6,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Hello World!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
