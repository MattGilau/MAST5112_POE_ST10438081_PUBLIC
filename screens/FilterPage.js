import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const FilterPage = () => {
  const route = useRoute(); // Get data passed from the previous screen
  const navigation = useNavigation(); // Allow navigation between screens
  const { course, items } = route.params; // Extract course name and list of items from route parameters

  return (
    <View style={styles.container}>
      {/* Display the course name as the screen title */}
      <Text style={styles.title}>{course.charAt(0).toUpperCase() + course.slice(1)} Options</Text>
      
      {/* Display the list of items using FlatList */}
      <FlatList
        data={items} // List of items to display
        keyExtractor={(item) => item.label} // Unique key for each item
        renderItem={({ item }) => (
          // Each item is shown inside a styled container
          <View style={styles.itemContainer}>
            {/* Left section for the item image */}
            <View style={styles.leftHalf}>
              <Image source={item.image} style={styles.itemImage} />
            </View>
            {/* Right section for the item details */}
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
      {/* Button to navigate back to the previous screen */}
      <Button title="Back" color="red" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, // The screen takes up all available space
    padding: 20, // Adds space inside the screen
    backgroundColor: '#fff', // White background
  },
  title: { 
    fontSize: 24, // Large font size for the title
    fontWeight: 'bold', // Makes the title bold
    textAlign: 'center', // Centers the title
    marginBottom: 20, // Adds space below the title
    color: '#002366', // Navy blue text color
  },
  itemContainer: { 
    flexDirection: 'row', // Arranges items in a row (image on left, details on right)
    marginBottom: 20, // Adds space below each item
    alignItems: 'center', // Aligns content vertically in the center
    backgroundColor: '#f0f0f0', // Light gray background for each item
    borderRadius: 10, // Rounds the corners of the container
    padding: 10, // Adds space inside the container
  },
  leftHalf: { 
    flex: 1, // The image section takes up 1 part of the available space
    alignItems: 'center', // Centers the image horizontally
    justifyContent: 'center', // Centers the image vertically
    padding: 10, // Adds space around the image
  },
  rightHalf: { 
    flex: 2, // The text section takes up 2 parts of the available space
    justifyContent: 'center', // Centers the text vertically
    padding: 10, // Adds space around the text
  },
  itemImage: { 
    width: 150, // Fixed width for the image
    height: 150, // Fixed height for the image
  },
  itemTextContainer: { 
    flex: 1, // Ensures the text section takes all available space
  },
  itemName: { 
    fontSize: 18, // Slightly larger font for the item name
    fontWeight: 'bold', // Makes the item name bold
  },
  itemDescription: { 
    fontSize: 14, // Smaller font for descriptions
    color: '#666', // Gray color for the text
  },
});

export default FilterPage;




