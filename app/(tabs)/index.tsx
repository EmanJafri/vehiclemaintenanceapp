import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>Welcome, Eman Jafri</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subheading}>To Your Vehicle Maintenance App</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Keep your car running smoothly with expert maintenance and care.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2B48C', // Tan / Light Brown background
    padding: 20,
  },
  box: {
    width: '90%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#8B4513', // Saddle Brown
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#FFF8DC', // Light Beige background
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textBox: {
    width: '90%',
    padding: 15,
    borderWidth: 1.5,
    borderColor: '#A0522D', // Sienna Brown
    borderRadius: 8,
    backgroundColor: '#F5DEB3', // Wheat color
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B4513', // Darker Brown for contrast
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#A0522D', // Medium Brown
  },
  text: {
    fontSize: 16,
    color: '#5C4033', // Deep Brown
    textAlign: 'center',
  },
});
