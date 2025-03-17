import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ServiceItemProps = {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ name, onEdit, onDelete }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{name}</Text>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.buttonText}>EDIT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.buttonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#8B4513',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C4033',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#D2691E',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ServiceItem;
