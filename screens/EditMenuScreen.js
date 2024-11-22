import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

const EditMenu = ({ navigation }) => {
  // State variables for each course array
  const [starters, setStarters] = useState([]);
  const [mains, setMains] = useState([]);
  const [desserts, setDesserts] = useState([]);

  // State variables for user inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');

  // Function to add an item to the appropriate course array
  const addItem = () => {
    // Input validation: Check if all fields are filled
    if (!name || !price || !description || !course) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    // Input validation: Check if price is a valid number
    if (isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    // Normalize the course input (make it case-insensitive)
    const normalizedCourse = course.toLowerCase();

    // Input validation: Check if the course is valid
    if (!['starters', 'mains', 'desserts'].includes(normalizedCourse)) {
      Alert.alert('Error', 'Course must be "starters", "mains", or "desserts".');
      return;
    }

    // Create a new item object
    const item = { name, price: parseFloat(price), description };

    // Add the item to the correct course array
    if (normalizedCourse === 'starters') setStarters([...starters, item]);
    if (normalizedCourse === 'mains') setMains([...mains, item]);
    if (normalizedCourse === 'desserts') setDesserts([...desserts, item]);

    // Clear input fields after adding
    setName('');
    setPrice('');
    setDescription('');
    setCourse('');
  };

  // Function to remove an item from a course array
  const removeItem = (index, course) => {
    if (course === 'starters') setStarters(starters.filter((_, i) => i !== index));
    if (course === 'mains') setMains(mains.filter((_, i) => i !== index));
    if (course === 'desserts') setDesserts(desserts.filter((_, i) => i !== index));
  };

  // Function to save changes and navigate to the HomeTwo screen
  const saveChanges = () => {
    navigation.navigate('HomeTwo', { starters, mains, desserts });
  };

  // Function to render items of a specific course
  const renderCourseItems = (courseArray, courseName) => (
    <>
      <Text style={styles.courseTitle}>{courseName}</Text>
      <FlatList
        data={courseArray}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{`${item.name} - R${item.price.toFixed(2)}`}</Text>
            <Text>{item.description}</Text>
            <Button
              title="Remove"
              color="red"
              onPress={() => removeItem(index, courseName.toLowerCase())}
            />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );

  return (
    <View style={styles.container}>
      {/* Input fields for adding a new item */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (in Rands)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (starters, mains, desserts)"
        value={course}
        onChangeText={setCourse}
      />
      <Button title="Add Item" color="green" onPress={addItem} />

      {/* Render items for each course */}
      {renderCourseItems(starters, 'Starters')}
      {renderCourseItems(mains, 'Mains')}
      {renderCourseItems(desserts, 'Desserts')}

      {/* Save changes button */}
      <Button title="Save Changes" color="green" onPress={saveChanges} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  item: { marginBottom: 10 },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 20, 
    marginTop: 20,
    color: '#002366', 
  },
});

export default EditMenu;



