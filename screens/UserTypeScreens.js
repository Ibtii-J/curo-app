import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function UsertTypeScreen({navigation}) {

  const [selected, setSelected] = useState('')
  
  return(
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>How will you use Curo?</Text>
      <Text style={styles.subtitle}>Choose one to get started</Text>

      <TouchableOpacity
        style={[styles.card, selected ==='business' && styles.cardSelected]}
        onPress={() => setSelected('business')}
      >
        <Text style={styles.cardTitle}>Business owner</Text>
        <Text style={styles.cardSub}>Manage your bookings and availability</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, selected === 'customer' && styles.cardSelected]}
        onPress={() => setSelected('customer')}
      >
        <Text style={styles.cardTitle}>Customer</Text>
        <Text style={styles.cardSub}>Find and book local services near you</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !selected && styles.buttonDisabled]}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#26215c',
    letterSpacing: -1,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#534AB7',
    marginBottom: 32,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20, 
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#EEEDFE',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#26215C',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: '#534AB7',
  },
  button: {
    backgroundColor: '#534AB7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#AFA9EC',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
