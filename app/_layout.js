// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// import { Stack, useRouter } from "expo-router";
// import { Text, TouchableOpacity } from "react-native";

// export default function RootLayout() {
//   const router = useRouter();

//   return (
//     <Stack>
//       {/* Remove back button when navigating back from the Home screen */}
//       <Stack.Screen
//         name="index"
//         options={{
//           headerShown: false, // Prevent back button and header from appearing
//         }}
//       />

//       <Stack.Screen
//         name="Home"
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: "blue" },
//           headerTintColor: "white",
//           headerLeft: () => null, // Remove back button completely
//           headerRight: () => (
//             <TouchableOpacity
//               style={{ paddingRight: 20 }}
//               onPress={() => {
//                 router.replace("/Login");
//               }}
//             >
//               <Text style={{ color: "white" }}>LogOut</Text>
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       {/* Other Screens */}
//       <Stack.Screen name="Login" options={{ headerShown: true }} />
//       <Stack.Screen
//         name="SignUp"
//         options={{
//           headerShown: true,
//           headerStyle: {
//             backgroundColor: "blue",
//             // This will make back button and other icons white

//             headerLeft: () => null,
//           },
//           headerTintColor: "white",
//           headerTitleStyle: {
//             color: "white", // This will make the title text color white
//           },
//         }}
//       />
//     </Stack>
//   );
// }



// app/_layout.js
// import { Stack, useRouter } from "expo-router";
// import { Text, TouchableOpacity } from "react-native"; // Keep if still using for Logout

// export default function RootLayout() {
//   const router = useRouter();

//   return (
//     <Stack>
//       {/* The initial redirect route */}
//       <Stack.Screen
//         name="index"
//         options={{
//           headerShown: false,
//         }}
//       />

//       {/* Login Screen */}
//       <Stack.Screen name="Login" options={{ headerShown: true }} />

//       {/* SignUp Screen */}
//       <Stack.Screen
//         name="SignUp"
//         options={{
//           headerShown: true,
//           headerStyle: { backgroundColor: "blue" },
//           headerTintColor: "white",
//           // headerLeft: () => null, // You had this, but for a Sign Up screen, a back button might be useful
//                                  // If you keep this, users can't go back to Login from SignUp using the header button.
//                                  // Usually, for SignUp, you either push a new screen or use a custom back button.
//           headerTitleStyle: { color: "white" },
//         }}
//       />

//       {/* THIS IS THE KEY CHANGE: Point to your (tabs) group */}
//       <Stack.Screen
//         name="(tab)" // The name must match the directory name
//         options={{
//           headerShown: false, // Hide the header for the tabs navigator itself.
//                                // Headers for individual tabs are defined in app/(tabs)/_layout.js
//         }}
//       />
//     </Stack>
//   );
// }




// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="Login" options={{ headerShown: false }} />
//       <Stack.Screen 
//         name="SignUp" 
//         options={{ 
//           headerShown: true,
//           headerStyle: { backgroundColor: 'blue' },
//           headerTintColor: 'white',
//           headerTitleStyle: { color: 'white' },
//         }} 
//       />
//       <Stack.Screen 
//         name="(tabs)" 
//         options={{ 
//           headerShown: false 
//         }} 
//       />
//     </Stack>
//   );
// }

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen 
        name="SignUp" 
        
        options={{ 
          headerShown: true,
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
          headerTitleStyle: { color: 'white' },
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(drawer)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}


