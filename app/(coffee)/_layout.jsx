// import { Slot } from "expo-router";

// export default function CoffeeLayout(){

//     return <Slot/>

// }

import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      {/* Index Page (No header) */}
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // Hide header on the index page
      />
      
      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true, // Show header
          headerStyle: { backgroundColor: 'blue' }, // Blue header
          headerLeft: () => null, // Remove back button
        }}
      />
      
      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        options={{
          headerShown: true, // Show header
          headerStyle: { backgroundColor: 'blue' }, // Blue header
          headerTitleheaderTintColor: 'white',
          headerLeft: () => null, // Remove back button
        }}
      />
      
      {/* SignUp Screen */}
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: true, // Show header
          headerStyle: { backgroundColor: 'blue' }, // Blue header
          headerLeft: () => null, // Remove back button
        }}
      />
    </Stack>
  );
}
