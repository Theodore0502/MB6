import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    navigation.replace('Main'); 
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.word}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.word}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/logo_google.png')} style={styles.icon} />
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} style={styles.icon} />
          <Text style={styles.fbText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>Not yet a member? <Text style={styles.signupLink}>Sign Up</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ededed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  word: {
    width: '90%',
    margin: 12,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPasswordContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotPassword: {
    color: 'orange',
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: 'orange',
    padding: 15,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '45%',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  fbText: {
    color: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
  },
  signupLink: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
