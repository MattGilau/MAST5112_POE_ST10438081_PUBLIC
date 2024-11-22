import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const FilterTwo = ({ route, navigation }) => {
  // Extract the course data (starters, mains, desserts) passed as parameters
  const { starters, mains, desserts } = route.params;

  // State to store the user's filter input
  const [filter, setFilter] = useState('');

  // Function to filter items based on user input
  const getFilteredItems = () => {
    // Check the input and return the corresponding items and title
    if (filter.toLowerCase() === 'starters') return { items: starters, title: 'Starters' };
    if (filter.toLowerCase() === 'mains') return { items: mains, title: 'Mains' };
    if (filter.toLowerCase() === 'desserts') return { items: desserts, title: 'Desserts' };
    return { items: [], title: '' }; // Return empty if no valid filter is provided
  };

  // Get the filtered items and course title from the filtering logic
  const { items: filteredItems, title: courseTitle } = getFilteredItems();

  return (
    <View style={styles.container}>
      {/* Input field for filtering by course */}
      <TextInput
        style={styles.input}
        placeholder="Filter by course (starters, mains, desserts)"
        value={filter}
        onChangeText={setFilter}
      />

      {/* Show filtered items if a valid course is entered */}
      {courseTitle ? (
        <View style={styles.courseContainer}>
          {/* Display the course title */}
          <Text style={styles.courseTitle}>{courseTitle}</Text>
          {/* List the filtered items */}
          <FlatList
            data={filteredItems}
            renderItem={({ item }) => (
              <View style={styles.item}>
                {/* Display item name, price, and description */}
                <Text style={styles.itemText}>{`${item.name} - R${item.price.toFixed(2)}`}</Text>
                <Text style={styles.itemText}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(_, index) => index.toString()} // Ensure unique keys
          />
        </View>
      ) : null}

      {/* Display a summary of all courses */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.totalsContainer}>
          {/* Show total items and average price for each course */}
          <Text style={styles.summaryText}>{`Total Starters: ${starters.length}, Avg Price: R${calculateAverage(starters)}`}</Text>
          <Text style={styles.summaryText}>{`Total Mains: ${mains.length}, Avg Price: R${calculateAverage(mains)}`}</Text>
          <Text style={styles.summaryText}>{`Total Desserts: ${desserts.length}, Avg Price: R${calculateAverage(desserts)}`}</Text>
        </View>
      </View>

      {/* Button to go back to the previous screen */}
      <View style={styles.backButtonContainer}>
        <Button title="Back" color="red" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

// Function to calculate the average price of items in a course
const calculateAverage = (items) => {
  const total = items.reduce((sum, item) => sum + item.price, 0); // Add up all item prices
  return items.length ? (total / items.length).toFixed(2) : '0.00'; // Return average or '0.00' if no items
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, // Use full screen
    padding: 10, // Add padding around the content
  },
  input: { 
    borderWidth: 1, // Add a border for the input field
    marginBottom: 10, // Space below the input field
    padding: 8, // Space inside the input field
  },
  courseContainer: {
    backgroundColor: '#e0e7ff', // Light blue background for course section
    padding: 15, // Space inside the container
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Space below the course container
  },
  courseTitle: { 
    fontWeight: 'bold', // Bold text for course title
    fontSize: 22, // Large font size
    color: '#002366', // Navy blue text color
    marginBottom: 10, // Space below the title
  },
  item: { 
    marginBottom: 10, // Space between items
  },
  itemText: { 
    fontSize: 16, // Normal font size
    color: '#000', // Black text color
  },
  summaryContainer: {
    marginTop: 20, // Space above the summary section
    backgroundColor: '#e0e7ff', // Light blue background
    padding: 15, // Space inside the summary container
    borderRadius: 10, // Rounded corners
  },
  summaryTitle: { 
    fontWeight: 'bold', // Bold text for summary title
    fontSize: 22, // Large font size
    color: '#002366', // Navy blue text color
    marginBottom: 10, // Space below the title
  },
  totalsContainer: {
    marginTop: 10, // Space above the totals section
  },
  summaryText: { 
    fontSize: 18, // Font size for summary details
    color: '#000', // Black text color
    marginVertical: 5, // Space above and below each summary line
  },
  backButtonContainer: {
    marginTop: 20, // Space above the back button
  },
});

export default FilterTwo;




