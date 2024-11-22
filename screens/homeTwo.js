import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const HomeTwo = ({ route, navigation }) => {
  // Destructure course arrays (starters, mains, desserts) from route parameters
  const { starters, mains, desserts } = route.params;

  // Function to calculate the average price of items in a course
  const calculateAverage = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0); // Add up all item prices
    return items.length ? (total / items.length).toFixed(2) : '0.00'; // Calculate average or return '0.00' if no items
  };

  // Function to render summary information for each course
  const renderCourseSummary = (courseArray, courseName) => (
    <View style={styles.courseContainer}>
      {/* Display course name */}
      <Text style={styles.courseTitle}>{courseName}</Text>
      {/* Display average price of items in the course */}
      <Text style={styles.courseInfo}>{`Average Price: R${calculateAverage(courseArray)}`}</Text>
      {/* Display total number of items in the course */}
      <Text style={styles.courseInfo}>{`Total Items: ${courseArray.length}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Render summaries for starters, mains, and desserts */}
      {renderCourseSummary(starters, 'Starters')}
      {renderCourseSummary(mains, 'Mains')}
      {renderCourseSummary(desserts, 'Desserts')}

      {/* Button to navigate to the Edit Menu screen */}
      <View style={styles.buttonContainer}>
        <Button title="Edit Menu" color="green" onPress={() => navigation.navigate('EditMenu')} />
      </View>

      {/* Button to navigate to the Filter Menu screen, passing current courses */}
      <View style={styles.buttonContainer}>
        <Button title="Filter Menu" color="green" onPress={() => navigation.navigate('FilterTwo', { starters, mains, desserts })} />
      </View>

      {/* Button to navigate back to the previous screen */}
      <View style={styles.buttonContainer}>
        <Button title="Back" color="red" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, // Screen takes up the entire space
    padding: 10, // Adds space inside the screen
    backgroundColor: '#f5f5f5', // Light gray background color
  },
  courseContainer: { 
    backgroundColor: '#e0e7ff', // Light blue background for course sections
    padding: 15, // Adds space inside the container
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Adds space below each course container
  },
  courseTitle: { 
    fontWeight: 'bold', // Makes the course title bold
    fontSize: 22, // Large font size for the course title
    color: '#002366', // Navy blue text color
    marginBottom: 5, // Adds space below the course title
  },
  courseInfo: { 
    fontSize: 18, // Slightly smaller font for course details
    color: '#000', // Black text color
    marginBottom: 2, // Adds slight spacing between lines of text
  },
  buttonContainer: { 
    marginVertical: 10, // Adds space above and below buttons
  },
});

export default HomeTwo;





