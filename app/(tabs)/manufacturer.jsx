import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import ManufacturerCard from '../../components/ManufacturerCard';  // Correct import path

const Manufacturer = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await axios.get(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json'
        );
        setManufacturers(response.data.Results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManufacturers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#8B4513" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manufacturers List</Text>

      <FlatList
        data={manufacturers}
        keyExtractor={(item) => item.Id.toString()}
        renderItem={({ item }) => (
          <ManufacturerCard
            name={item.Name}
            country={item.Country}
            vehicleType={item.VehicleType}
            wmi={item.WMI}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Beige background
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8B4513', // Saddle Brown
  },
});

export default Manufacturer;
