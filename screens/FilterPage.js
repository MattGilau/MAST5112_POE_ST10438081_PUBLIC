import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const FilterPage = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Use the hook to get the navigation object
  const { course, items } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.charAt(0).toUpperCase() + course.slice(1)} Options</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.label}</Text>
              <Text style={styles.itemDescription}>Price: R{item.price}</Text>
              <Text style={styles.itemDescription}>Description: {item.description}</Text>
            </View>
          </View>
        )}
      />
      <Button title="Back" color="red" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#002366'},
  itemContainer: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  itemImage: { width: 80, height: 80, marginRight: 10 },
  itemTextContainer: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 14, color: '#666' },
});

export default FilterPage;


