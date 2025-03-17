import React, { useState } from 'react';
import { 
  View, Text, FlatList, TextInput, TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import ServiceItem from '../components/ServiceItem';  // Import the new item component

type Service = {
  id: string;
  name: string;
};

const initialServices: Service[] = [
  { id: '1', name: 'Oil Change' },
  { id: '2', name: 'Brake Inspection' },
];

export default function ServicesScreen() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [newService, setNewService] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);

  const addService = (): void => {
    if (newService.trim()) {
      setServices([...services, { id: Date.now().toString(), name: newService }]);
      setNewService('');
    }
  };

  const updateService = (): void => {
    setServices(
      services.map(service =>
        service.id === editingService?.id
          ? { ...service, name: newService }
          : service
      )
    );
    setEditingService(null);
    setNewService('');
  };

  const deleteService = (id: string): void => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vehicle Maintenance Services</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter service name"
          placeholderTextColor="#8B5E3B"
          value={newService}
          onChangeText={setNewService}
        />
      </View>

      {editingService ? (
        <TouchableOpacity style={styles.updateButton} onPress={updateService}>
          <Text style={styles.buttonText}>UPDATE SERVICE</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={addService}>
          <Text style={styles.buttonText}>ADD SERVICE</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceItem
            name={item.name}
            onEdit={() => {
              setEditingService(item);
              setNewService(item.name);
            }}
            onDelete={() => deleteService(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#5C4033',
  },
  inputBox: {
    width: '100%',
    padding: 12,
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    fontSize: 16,
    color: '#5C4033',
  },
  addButton: {
    backgroundColor: '#8B4513',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: '#A0522D',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
