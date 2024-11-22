import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';

const FilterTwo = ({ route }) => {
  const { starters, mains, desserts } = route.params;
  const [filter, setFilter] = useState('');

  const getFilteredItems = () => {
    if (filter.toLowerCase() === 'starters') return { items: starters, title: 'Starters' };
    if (filter.toLowerCase() === 'mains') return { items: mains, title: 'Mains' };
    if (filter.toLowerCase() === 'desserts') return { items: desserts, title: 'Desserts' };
    return { items: [], title: '' };
  };

  const { items: filteredItems, title: courseTitle } = getFilteredItems();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filter by course (starters, mains, desserts)"
        value={filter}
        onChangeText={setFilter}
      />
      {courseTitle ? <Text style={styles.courseTitle}>{courseTitle}</Text> : null}
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{`${item.name} - R${item.price.toFixed(2)}`}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <View>
        <Text style={styles.summaryText}>{`Total Starters: ${starters.length}, Avg Price: R${calculateAverage(starters)}`}</Text>
        <Text style={styles.summaryText}>{`Total Mains: ${mains.length}, Avg Price: R${calculateAverage(mains)}`}</Text>
        <Text style={styles.summaryText}>{`Total Desserts: ${desserts.length}, Avg Price: R${calculateAverage(desserts)}`}</Text>
      </View>
    </View>
  );
};

const calculateAverage = (items) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return items.length ? (total / items.length).toFixed(2) : '0.00';
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 22, 
    color: '#002366', 
    marginVertical: 10,
  },
  item: { marginBottom: 10 },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  summaryText: {
    fontSize: 18, 
    color: '#000',
    marginVertical: 5,
  },
});

export default FilterTwo;

