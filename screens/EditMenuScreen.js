// screens/EditMenuScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const EditMenuScreen = () => {
  const menuItems = [
    { id: '1', title: 'Dish 1' },
    { id: '2', title: 'Dish 2' },
    { id: '3', title: 'Dish 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Changes" onPress={() => alert('Changes Saved')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e9ecef' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  itemContainer: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  itemText: { fontSize: 16 },
  buttonContainer: { marginTop: 20 },
});

export default EditMenuScreen;
