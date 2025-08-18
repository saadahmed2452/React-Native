/* eslint-disable import/no-unresolved */
//following design by NB

// import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
// import React, { useState } from "react";
// import { Link } from "expo-router";

// const Login = () => {

//   const [email, setEmail]= useState("");
//   const [password, setPassword]= useState("");

//   const valEmail=(email)=>{
//     const regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);

//   }

//   const handleLogin=()=>{
//     alert(`LoggedIn with ${email}, with password : ${password}`)

//   }

//   return (
//     <>
//       <View style={styles.container}>
//         <View style={styles.form}>
//           <Text style={styles.Label} >
//             Email <Text style={styles.star}>*</Text>
//           </Text>
//           <TextInput style={styles.input} placeholder="Enter Your email" value={email} onChangeText={setEmail} />
//         </View>
//         <View style={styles.form}>
//           <Text style={styles.Label}>
//             Password <Text style={styles.star}>*</Text>
//           </Text>
//           <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} />
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Text style={styles.remem}>Remember for 30 days</Text>
//             </View>
//             <Text style={styles.forgot}>Forgot password</Text>
//           </View>
//         </View>
//         <View style={styles.bottom}>
//           <Pressable style={styles.button} onPress={handleLogin}>
//             <Text style={styles.buttonText}>Login</Text>
//           </Pressable>
//           <Text style={styles.Bott}>
//             Dont have an account?{" "}
//             <Link href={"/SignUp"} style={styles.link}>
//               SignUp
//             </Link>
//           </Text>
//         </View>
//       </View>
//     </>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignSelf: "center",
//     width: "100%",
//     padding: 20,
//     alignContent: "center",
//     margin: "auto",
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 20,
//   },
//   form: {
//     marginBottom: 10,
//   },

//   Label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//   },
//   star: {
//     color: "red",
//   },
//   link: {
//     textDecorationColor: "blue",
//     color: "blue",
//     fontWeight: "bold",
//   },
//   bottom: {
//     gap: 10,
//   },
//   Bott: {
//     // paddingLeft:30,
//     alignSelf: "center",
//   },
//   remem: {
//     color: "black",
//     fontWeight: "bold",
//   },
//   forgot: {
//     fontWeight: "bold",
//     color: "blue",
//   },
// });

//present

// import { Link, useRouter } from "expo-router";
// import { replace } from "expo-router/build/global-state/routing";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const router = useRouter();

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
//   };

//   const handleLogin = () => {
//     setEmailError("");
//     setPasswordError("");

//     if (!email) setEmailError("Email is required");
//     else if (!validateEmail(email)) setEmailError("Please enter a valid email");

//     if (!password) setPasswordError("Password is required");

//     if (email && validateEmail(email) && password) {
//       router.replace("/Home");
//       Alert.alert("Login Successful", `Email: ${email}`);
//     }
//   };

//   const Linking = () => {
//     router.replace("/SignUp");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.form}>
//         <Text style={styles.Label}>
//           Email <Text style={styles.star}>*</Text>
//         </Text>
//         <TextInput
//           style={[styles.input, emailError ? { borderColor: "red" } : {}]}
//           placeholder="Enter Your email"
//           value={email}
//           onChangeText={setEmail}
//         />
//         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//       </View>

//       <View style={styles.form}>
//         <Text style={styles.Label}>
//           Password <Text style={styles.star}>*</Text>
//         </Text>
//         <View
//           style={[
//             styles.inputContainer,
//             passwordError ? { borderColor: "red" } : {},
//           ]}
//         >
//           <TextInput
//             style={styles.inputField}
//             placeholder="Enter your password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />
//           <Pressable onPress={() => setShowPassword(!showPassword)}>
//             <Ionicons
//               name={showPassword ? "eye-off" : "eye"}
//               size={24}
//               color="gray"
//             />
//           </Pressable>
//         </View>
//         {passwordError ? (
//           <Text style={styles.errorText}>{passwordError}</Text>
//         ) : null}
//       </View>

//       <View style={styles.bottom}>
//         <Pressable onPress={handleLogin} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//         <Text style={styles.Bott}>
//           Don't have an account?{" "}
//           <Link href="/SignUp" onPress={Linking} style={styles.link}>
//             SignUp
//           </Link>
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Login;
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignSelf: "center",
//     width: "100%",
//     padding: 20,
//     margin: "auto",
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 15,
//     borderColor: "gray",
//   },
//   form: {
//     marginBottom: 10,
//   },
//   Label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//   },
//   star: {
//     color: "red",
//   },
//   link: {
//     color: "blue",
//     fontWeight: "bold",
//   },
//   bottom: {
//     gap: 10,
//   },
//   Bott: {
//     alignSelf: "center",
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginTop: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginBottom: 10,
//   },
//   inputField: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
// });



// app/Login.js
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Platform, // Import Platform for placeholderTextColor
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (email && validateEmail(email) && password) {
      // THIS IS THE CRUCIAL CHANGE: Redirect to the tabs group
      router.replace("/(drawer)"); // This will load the (tabs)/_layout.js and its default tab (index.js)
      Alert.alert("Login Successful", `Email: ${email}`);
    }
  };

  // Optional: If you want Link to SignUp to also replace, not push
  const LinkingToSignUp = () => {
    router.replace("/SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.Label}>
          Email <Text style={styles.star}>*</Text>
        </Text>
        <TextInput
          style={[styles.input, emailError ? { borderColor: "red" } : {}]}
          placeholder="Enter Your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="gray" // Added for consistency across platforms
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.form}>
        <Text style={styles.Label}>
          Password <Text style={styles.star}>*</Text>
        </Text>
        <View
          style={[
            styles.inputContainer,
            passwordError ? { borderColor: "red" } : {},
          ]}
        >
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="gray" // Added for consistency across platforms
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </Pressable>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      <View style={styles.bottom}>
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Text style={styles.Bott}>
          Don't have an account?{" "}
          <Link href="/SignUp" onPress={LinkingToSignUp} style={styles.link}> {/* Use the Linking function */}
            SignUp
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make container take full height
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    padding: 20,
    // margin: "auto", // Remove, not typical for RN
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15, // Adjusted padding for consistency
    borderColor: "gray",
    width: '100%', // Ensure it takes full width
  },
  form: {
    marginBottom: 10,
    width: '100%', // Ensure it takes full width
  },
  Label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: '100%', // Ensure it takes full width
  },
  buttonText: {
    color: "white",
  },
  star: {
    color: "red",
  },
  link: {
    color: "blue",
    fontWeight: "bold",
  },
  bottom: {
    gap: 10,
    width: '100%', // Ensure it takes full width
  },
  Bott: {
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    width: '100%', // Ensure it takes full width
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});






