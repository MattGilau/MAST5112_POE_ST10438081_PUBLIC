import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const FilterPage = () => {
  const route = useRoute();
  const navigation = useNavigation(); 
  const { course, items } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.charAt(0).toUpperCase() + course.slice(1)} Options</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.leftHalf}>
              <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={styles.rightHalf}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.label}</Text>
                <Text style={styles.itemDescription}>Price: R{item.price}</Text>
                <Text style={styles.itemDescription}>Description: {item.description}</Text>
              </View>
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
  itemContainer: { 
    flexDirection: 'row', 
    marginBottom: 20, 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0', 
    borderRadius: 10, 
    padding: 10, 
  },
  leftHalf: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 },
  rightHalf: { flex: 2, justifyContent: 'center', padding: 10 },
  itemImage: { width: 150, height: 150 }, 
  itemTextContainer: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 14, color: '#666' },
});

export default FilterPage;



