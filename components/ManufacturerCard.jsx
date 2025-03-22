import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManufacturerCard = ({ name, country, vehicleType, wmi }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Country: {country || 'N/A'}</Text>
      <Text>Vehicle Type: {vehicleType}</Text>
      <Text>WMI Code: {wmi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF8DC',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8B4513',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
});

export default ManufacturerCard;
