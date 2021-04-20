import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = (props) => {
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const login = (email, pass) => {
    alert('email', email, 'password', pass);
  };

  // const handleChange;
  return (
    <View style={styles.screen}>
      <Text>Login</Text>

      <TextInput
        clearTextOnFocus={true}
        autoCompleteType="email"
        style={styles.input}
        onChangeText={(email) => {
          onChangeEmail(email);
        }}
        value={email}
        defaultValue="email"
        label="Email"
      />
      <TextInput
        autoCompleteType="password"
        style={styles.input}
        onChangeText={(pass) => onChangePass(pass)}
        value={pass}
        label="Password"
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          login(email, pass);
          props.navigation.navigate({ routeName: 'HomeScreen' });
        }}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  submitButton: {
    width: '80%',
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default Login;
