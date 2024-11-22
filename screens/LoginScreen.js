import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  // These are variables to store the username and password entered by the user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To show error messages

  // Function to handle what happens when the user tries to log in
  const handleLogin = () => {
    // Check if the entered username and password match the correct details
    if (username === 'Christoffel' && password === 'admin09') {
      // If correct, move to the Edit Menu screen
      navigation.navigate('EditMenu');
    } else {
      // If incorrect, show an alert message and set an error
      Alert.alert(
        'Username or password incorrect', // Message to show
        '',
        [{ text: 'OK', onPress: () => setError('') }] // Button to dismiss the alert
      );
      setError('Username or password incorrect'); // Set error for visual feedback
    }
  };

  return (
    <View style={styles.container}>
      {/* The main heading of the screen */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please enter Admin details:</Text>

      {/* Input field for the username */}
      <TextInput
        placeholder="Username" // Text to guide the user
        value={username} // Shows the current value of username
        onChangeText={setUsername} // Updates username as the user types
        style={styles.input} // Applies styling to the input box
        placeholderTextColor="#A9A9A9" // Light gray text for the placeholder
      />

      {/* Input field for the password */}
      <TextInput
        placeholder="Password" // Text to guide the user
        value={password} // Shows the current value of password
        onChangeText={setPassword} // Updates password as the user types
        secureTextEntry // Hides the password as dots for security
        style={styles.input} // Applies styling to the input box
        placeholderTextColor="#A9A9A9" // Light gray text for the placeholder
      />

      {/* Displays error message if login details are incorrect */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Button to log in */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Button to go back to the previous screen */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the screen use all available space
    padding: 20, // Adds space around the content
    justifyContent: 'center', // Aligns items in the center vertically
    backgroundColor: '#fff', // White background color
  },
  title: {
    fontSize: 36, // Large font size for the title
    fontWeight: 'bold', // Makes the text bold
    textAlign: 'center', // Centers the title
    marginBottom: 10, // Adds space below the title
    color: '#002366', // Navy blue text color
  },
  subtitle: {
    fontSize: 18, // Medium font size
    textAlign: 'center', // Centers the subtitle
    marginBottom: 20, // Adds space below the subtitle
    color: '#666', // Gray text color
  },
  input: {
    borderWidth: 1, // Adds a thin border around the input box
    padding: 15, // Adds space inside the input box
    marginVertical: 10, // Adds space above and below the input box
    borderRadius: 10, // Rounds the corners of the input box
    borderColor: '#D3D3D3', // Light gray border
    backgroundColor: '#F0F0F0', // Light gray background for the input
    fontSize: 16, // Text size for the input
    color: '#333', // Dark gray text color
  },
  errorText: {
    color: 'red', // Red text for errors
    textAlign: 'center', // Centers the error message
    marginBottom: 20, // Adds space below the error
    fontSize: 16, // Medium text size
  },
  loginButton: {
    backgroundColor: 'green', // Green background for the login button
    paddingVertical: 15, // Adds space inside the button
    borderRadius: 10, // Rounds the corners of the button
    alignItems: 'center', // Centers the text inside the button
    marginVertical: 10, // Adds space above and below the button
  },
  loginButtonText: {
    color: '#fff', // White text color
    fontSize: 18, // Medium font size
    fontWeight: 'bold', // Makes the text bold
  },
  backButton: {
    backgroundColor: 'red', // Red background for the back button
    paddingVertical: 15, // Adds space inside the button
    borderRadius: 10, // Rounds the corners of the button
    alignItems: 'center', // Centers the text inside the button
    marginVertical: 10, // Adds space above and below the button
  },
  backButtonText: {
    color: '#fff', // White text color
    fontSize: 18, // Medium font size
    fontWeight: 'bold', // Makes the text bold
  },
});

export default LoginScreen;



