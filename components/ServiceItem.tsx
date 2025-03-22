import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ServiceItemProps {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ServiceItem({ name, onEdit, onDelete }: ServiceItemProps) {
  return (
    <View style={styles.serviceItem}>
      <Text style={styles.text}>{name}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceItem: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#5C4033',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#A0522D',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
