import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const router = useRouter();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    setNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    }

    if (!lastName.trim()) {
      setLastNameError("Last Name is required");
      valid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please Confirm Your Password");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords Does'nt Matched");
      valid = false;
    }

    if (valid) {
      Alert.alert(
        "Account Created",
        `Welcome, ${name}! Now Login With your Credentials`
      );
      router.replace("/Login");

      // TODO: Call API or navigate
    }
  };

  const Linking = () => {
    router.replace("/Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.Label}>
            First Name <Text style={styles.star}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, nameError ? { borderColor: "red" } : {}]}
            placeholder="Enter your first name"
            value={name}
            onChangeText={setName}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        </View>
        <View style={styles.form}>
          <Text style={styles.Label}>
            Last Name <Text style={styles.star}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, lastNameError ? { borderColor: "red" } : {}]}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={setLastName}
          />
          {lastNameError ? (
            <Text style={styles.errorText}>{lastNameError}</Text>
          ) : null}
        </View>

        <View style={styles.form}>
          <Text style={styles.Label}>
            Email <Text style={styles.star}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, emailError ? { borderColor: "red" } : {}]}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
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
          ) : (
            <Text>Must be at least 8 characters.</Text>
          )}
        </View>
        <View style={styles.form}>
          <Text style={styles.Label}>
            Confirm Password <Text style={styles.star}>*</Text>
          </Text>
          <View
            style={[
              styles.inputContainer,
              confirmPasswordError ? { borderColor: "red" } : {},
            ]}
          >
            <TextInput
              style={styles.inputField}
              placeholder="Re-Enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <Pressable
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          {confirmPasswordError ? (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          ) : (
            <Text>
              Must be at least 8 characters. Must match with Password given
              above!
            </Text>
          )}
        </View>

        <View style={styles.bottom}>
          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <Text style={styles.Bott}>
            Already have an account?{" "}
            <Link href={"/Login"} onPress={Linking} style={styles.link}>
              Login
            </Link>
          </Text>
        </View>

        {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum accusantium error sapiente minus aliquam magni laborum aspernatur aut possimus unde assumenda eligendi quis repudiandae commodi, cumque quos repellat libero!
      Hic vitae porro tempore voluptatem, possimus doloribus consequatur in mollitia eius tenetur nobis! Explicabo eum iure dolorum aperiam ducimus enim ab aspernatur commodi ad amet? Natus magni deleniti quaerat ad.
      Iure veniam, sed recusandae vel tempore dignissimos itaque, ullam nulla velit tenetur illo blanditiis aliquid rem! Mollitia quaerat voluptas impedit sint assumenda molestias soluta fugit, labore perferendis, tempora, eligendi incidunt.
      Ullam, saepe. Cumque natus veritatis repellendus unde voluptatibus fugit tenetur ad debitis illum, omnis mollitia dolorem, quae reprehenderit necessitatibus iusto aliquid, laborum voluptates excepturi sit aut doloremque et cum. Ab.
      Unde distinctio vel nesciunt voluptate dolorem, nihil quod ipsum dicta! Ut quasi autem, blanditiis nihil magni itaque facere ad eos quam distinctio explicabo in quis quos delectus nam doloribus dolores.
      Quidem eos consequatur, excepturi natus enim odio atque aut, nisi voluptate, nemo dignissimos repellat corrupti sed beatae error quibusdam iure distinctio aperiam saepe itaque cumque molestiae? Quibusdam quisquam officiis velit.
      Cupiditate quidem quae beatae doloribus ab. Quae, pariatur ratione nesciunt omnis sed et illo ex placeat corporis. Delectus quos id, distinctio, adipisci omnis officia, deserunt nihil voluptatem cumque incidunt iste.
      Distinctio, aperiam! Accusantium ducimus sit, temporibus tempora qui est. Quo dolor ea iusto dolores, magnam natus iure voluptate impedit pariatur esse a atque deleniti repellat modi inventore? Magnam, vel suscipit?
      Architecto, id reprehenderit. Recusandae quam dolore ipsa, doloremque exercitationem, nesciunt quaerat incidunt vero fugiat odio iste assumenda, quia autem magni quas veniam maiores voluptatum repudiandae dolorem. Enim ratione nesciunt ea?
      Non labore laborum eius minima consectetur aperiam ratione temporibus magnam voluptatum quis atque, iure esse officia ab ut? Illum beatae ad voluptatum odio aspernatur minima? Deleniti excepturi nulla pariatur. Quaerat.</Text>
      */}
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    padding: 20,
    margin: "auto",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    borderColor: "gray",
  },
  form: {
    marginBottom: 10,
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
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
