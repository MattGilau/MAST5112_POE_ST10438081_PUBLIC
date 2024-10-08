// screens/FilterPage.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const FilterPage = () => {
  const filters = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by:</Text>
      <FlatList
        data={filters}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Apply Filters" onPress={() => alert('Filters Applied')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f1f1f1' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  itemContainer: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  itemText: { fontSize: 16 },
  buttonContainer: { marginTop: 20 },
});

export default FilterPage;
