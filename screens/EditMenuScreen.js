import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EditMenuScreen = ({ navigation }) => {
  // Initial menu state, with courses for Starters, Mains, and Desserts
  const [menuItems, setMenuItems] = useState({
    Starters: [],
    Mains: [],
    Desserts: [],
  });

  // State to handle inputs for new item
  const [selectedCourse, setSelectedCourse] = useState('Starters'); // Default to Starters
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  // Add new menu item
  const addMenuItem = () => {
    if (newItemTitle.trim() && newItemPrice.trim() && newItemDescription.trim()) {
      const newItem = {
        id: (menuItems[selectedCourse].length + 1).toString(),
        title: newItemTitle,
        price: newItemPrice,
        description: newItemDescription,
      };

      // Update the selected course's menu
      setMenuItems({
        ...menuItems,
        [selectedCourse]: [...menuItems[selectedCourse], newItem],
      });

      // Reset input fields
      setNewItemTitle('');
      setNewItemPrice('');
      setNewItemDescription('');
    } else {
      Alert.alert('Error', 'Please fill in all fields (name, price, description).');
    }
  };

  // Remove menu item
  const removeMenuItem = (id) => {
    setMenuItems({
      ...menuItems,
      [selectedCourse]: menuItems[selectedCourse].filter(item => item.id !== id),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Menu</Text>

      {/* Picker to select course */}
      <Text style={styles.label}>Select Course</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      {/* Input fields for adding new items */}
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={newItemTitle}
        onChangeText={setNewItemTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter dish price (R)"
        keyboardType="numeric"
        value={newItemPrice}
        onChangeText={setNewItemPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter dish description"
        value={newItemDescription}
        onChangeText={setNewItemDescription}
      />
      <Button title="Add Dish" color="green" onPress={addMenuItem} />

      {/* List of menu items for the selected course */}
      <FlatList
        data={menuItems[selectedCourse]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>Price: R{item.price}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <Button title="Remove" color="red" onPress={() => removeMenuItem(item.id)} />
          </View>
        )}
      />

      {/* Save changes button */}
      <View style={styles.buttonContainer}>
        <Button title="Save Changes" color="orange" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e9ecef' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#002366' },
  label: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  picker: { height: 50, width: '100%', marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  itemTextContainer: { flex: 1 },
  itemTitle: { fontSize: 16, fontWeight: 'bold' },
  itemPrice: { fontSize: 14, color: '#666' },
  itemDescription: { fontSize: 14, color: '#666' },
  buttonContainer: { marginTop: 20 },
});

export default EditMenuScreen;


