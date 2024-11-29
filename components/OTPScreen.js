import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const email = route.params?.email; // Get email from previous screen (if passed)

  const handleOTPChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp.join(''));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.title}>Verification</Text>
      </View>

      <View style={styles.verificationContainer}>
        <Text style={styles.verifyText}>Verify your</Text>
        <Text style={styles.verifyText}>account!</Text>
        <Text style={styles.emailText}>Enter the OTP you receive</Text>
        {email && <Text style={styles.emailText}>{email}</Text>} {/* will display email if available? idk if this is functional */}

        <View style={styles.otpInputContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => handleOTPChange(text, index)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.sendAgainButton}>
        <Text style={styles.sendAgainButtonText}>Send Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signUpButtonText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08051D', // Dark background color
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  verificationContainer: {
    backgroundColor: '#08051D',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#434064',
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  verifyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    // marginBottom: 12, // trying to replicate every lil bit of styles lol
  },
  emailText: {
    color: '#CBCBCB',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 16,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 70,
    backgroundColor: '#2E2C44',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  sendAgainButton: {
    marginBottom: 20,
  },
  sendAgainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default OTPScreen;
