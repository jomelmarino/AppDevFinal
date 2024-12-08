import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };
    loadFonts();
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in successfully:", user);
        navigation.navigate("Dashboard");
        alert("Login successful");
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          Alert.alert("Error", "The password is incorrect");
        } else {
          Alert.alert("Error", "Invalid credentials");
        }
      });
    };
      
    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Title container now aligned to the left */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hey,</Text>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Back</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="mail" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.showPasswordButton}>
            <Ionicons name="eye-off-outline" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={(handleLogin)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#08051D',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  titleContainer: {
    marginTop: 220,
    marginBottom: 40,
    alignItems: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#262438',
    borderRadius: 36,
    borderWidth: 2,
    borderColor: '#434064',
    paddingHorizontal: 10,
    paddingLeft: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    fontSize: 20,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 20,
  },
  forgotPassword: {
    marginBottom: 20,
    marginLeft: '65%',
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
});

export default LoginScreen;