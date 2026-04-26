import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignupScreen';
import UserTypeScreen from './screens/UserTypeScreen';
 
function CuroLogo() {
  return (
    <View style={styles.logoBox}>
      <Svg width="80" height="80" viewBox="55 55 90 90" fill="none">
        <Path
          d="M116 72 C106 66, 88 66, 78 76 C68 86, 68 104, 78 113 C86 121, 100 123, 112 119"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <Circle
          cx="118"
          cy="122"
          r="10"
          fill="#534AB7"
          stroke="white"
          strokeWidth="4"
        />
        <Path
          d="M113 122 L117 127 L125 116"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}
 
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CuroLogo />
      <Text style={styles.title}>Curo</Text>
      <Text style={styles.tagline}>Your time, in good hands</Text>
 
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonPrimaryText}>Create account</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="UserType" component={UserTypeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoBox: {
    width: 100,
    height: 100,
    borderRadius: 26,
    backgroundColor: '#534AB7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#26215C',
    letterSpacing: -1,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#534AB7',
    marginBottom: 48,
  },
  buttonPrimary: {
    backgroundColor: '#534AB7',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonSecondary: {
    backgroundColor: '#EEEDFE',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#534AB7',
    fontSize: 16,
    fontWeight: '500',
  },
});
