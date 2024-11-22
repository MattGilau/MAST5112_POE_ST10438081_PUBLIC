import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const HomeTwo = ({ route, navigation }) => {
  const { starters, mains, desserts } = route.params;

  const calculateAverage = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return items.length ? (total / items.length).toFixed(2) : '0.00';
  };

  const renderCourseSummary = (courseArray, courseName) => (
    <View style={styles.courseContainer}>
      <Text style={styles.courseTitle}>{courseName}</Text>
      <Text style={styles.courseInfo}>{`Average Price: R${calculateAverage(courseArray)}`}</Text>
      <Text style={styles.courseInfo}>{`Total Items: ${courseArray.length}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderCourseSummary(starters, 'Starters')}
      {renderCourseSummary(mains, 'Mains')}
      {renderCourseSummary(desserts, 'Desserts')}
      <View style={styles.buttonContainer}>
        <Button title="Edit Menu" color="green" onPress={() => navigation.navigate('EditMenu')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Filter Menu" color="green" onPress={() => navigation.navigate('FilterTwo', { starters, mains, desserts })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  courseContainer: { marginBottom: 20 },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 22, 
    color: '#002366', 
    marginBottom: 5,
  },
  courseInfo: {
    fontSize: 18,
    color: '#000', 
    marginBottom: 2,
  },
  buttonContainer: { marginVertical: 10 },
});

export default HomeTwo;


