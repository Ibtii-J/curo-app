import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
 
export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
 
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
 
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>Join Curo today</Text>
 
      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="#AFA9EC"
        value={name}
        onChangeText={setName}
      />
 
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="you@email.com"
        placeholderTextColor="#AFA9EC"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
 
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Choose a password"
        placeholderTextColor="#AFA9EC"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
 
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserType')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
 
      <Text style={styles.loginPrompt}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('LogIn')}
        >
          Log in
        </Text>
      </Text>
 
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1EFE8',
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 16,
    color: '#534AB7',
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#26215C',
    letterSpacing: -1,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#534AB7',
    marginBottom: 32,
  },
  label: {
    fontSize: 13,
    color: '#26215C',
    fontWeight: '500',
    marginBottom: 6,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#2C2C2A',
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#EEEDFE',
  },
  button: {
    backgroundColor: '#534AB7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  loginPrompt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#534AB7',
  },
  loginLink: {
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
