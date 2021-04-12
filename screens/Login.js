import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const Login = (props) => {
  const [email, onChangeEmail] = useState('Email');
  const [pass, onChangePass] = useState('Password');
  return (
    <View style={styles.screen}>
      <Text>Login</Text>

      <TextInput
        clearTextOnFocus={true}
        autoCompleteType="email"
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        defaultValue="email"
      />
      <TextInput
        autoCompleteType="password"
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
      />
      <View style={styles.button}>
        <Button
          accessibilityLabel="submit"
          title="Submit"
          onPress={() => {
            props.navigation.navigate({ routeName: 'HomeScreen' });
          }}
        />
      </View>
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
  button: {
    width: '80%',
    // flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 16,
  },
});
export default Login;
