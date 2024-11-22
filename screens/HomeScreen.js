import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  // Keeping track of selected items for starters, mains, and desserts
  const [selectedItems, setSelectedItems] = useState({
    starters: '',
    mains: '',
    desserts: '',
  });

  // Keeping track of the prices for each selected item
  const [prices, setPrices] = useState({
    starters: 0,
    mains: 0,
    desserts: 0,
  });

  // Storing the total price of selected items
  const [totalPrice, setTotalPrice] = useState(0);

  // Storing images for the selected items
  const [images, setImages] = useState({
    starters: require('PART2/screens/_images/bakedCW.jpg'),
    mains: require('PART2/screens/_images/burger.jpg'),
    desserts: require('PART2/screens/_images/fruit.jpg'),
  });

  // The menu items for each course with their details
  const menuItems = {
    starters: [
      { label: 'Baked Chicken Wings', price: 60, description: 'Crispy chicken wings tossed in a savory sauce.', image: require('PART2/screens/_images/bakedCW.jpg') },
      { label: 'Bruschetta', price: 45, description: 'Toasted bread topped with fresh tomatoes and basil.', image: require('PART2/screens/_images/bruschetta.jpg') },
      { label: 'Vegetable Spring Rolls', price: 50, description: 'Crispy rolls filled with a medley of fresh vegetables.', image: require('PART2/screens/_images/vegeSR.jpg') },
    ],
    mains: [
      { label: 'Burger', price: 120, description: 'Juicy beef patty served with fresh lettuce and tomato.', image: require('PART2/screens/_images/burger.jpg') },
      { label: 'Pizza', price: 140, description: 'Classic pizza topped with mozzarella and your choice of toppings.', image: require('PART2/screens/_images/pizza.jpg') },
      { label: 'Steak', price: 180, description: 'Grilled to perfection, served with a side of vegetables.', image: require('PART2/screens/_images/steak.jpg') },
    ],
    desserts: [
      { label: 'Fruit Salad', price: 50, description: 'A refreshing mix of seasonal fruits.', image: require('PART2/screens/_images/fruit.jpg') },
      { label: 'Waffles', price: 60, description: 'Golden waffles served with syrup and whipped cream.', image: require('PART2/screens/_images/waffles.jpg') },
      { label: 'Chocolate Moose', price: 70, description: 'Rich and creamy chocolate mousse topped with chocolate shavings.', image: require('PART2/screens/_images/moose.jpg') },
    ],
  };

  // Updates the selected item, price, and image for a specific course
  const handleItemSelect = (course, item) => {
    setSelectedItems((prev) => ({ ...prev, [course]: item.label }));
    setPrices((prev) => ({ ...prev, [course]: item.price }));
    setImages((prev) => ({ ...prev, [course]: item.image }));
  };

  // Calculates the total price of the selected items
  const calculateTotal = () => {
    const total = prices.starters + prices.mains + prices.desserts;
    setTotalPrice(total);
  };

  // Clears all selected items and resets the total price
  const clearSelections = () => {
    setSelectedItems({ starters: '', mains: '', desserts: '' });
    setPrices({ starters: 0, mains: 0, desserts: 0 });
    setTotalPrice(0);
  };

  return (
    <View style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Image source={require('./_images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Christoffel Menu App</Text>
      </View>
      <Text style={styles.welcomeMessage}>Welcome valued customer</Text>

      {/* Starters Section */}
      <View style={styles.courseSection}>
        <View style={styles.leftHalf}>
          {/* Displaying the image of the selected starter */}
          <Image source={images.starters} style={styles.courseImage} />
          <Button 
            title="View Starters" 
            color="green" 
            onPress={() => navigation.navigate('Filter', { course: 'starters', items: menuItems.starters })} 
          />
        </View>
        <View style={styles.rightHalf}>
          {/* Displaying the list of starters */}
          <Text style={styles.courseTitle}>
            Starters ({menuItems.starters.length} options)
          </Text>
          <Picker
            selectedValue={selectedItems.starters}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => handleItemSelect('starters', menuItems.starters[itemIndex])}
          >
            {menuItems.starters.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.label} />
            ))}
          </Picker>
          <View style={styles.priceBlock}>
            <Text style={styles.priceText}>R{prices.starters}</Text>
          </View>
        </View>
      </View>

      {/* Similar sections for Mains and Desserts */}
      {/* Calculate Total Button */}
      <View style={styles.buttonContainer}>
        <Button title="Calculate Total" color="green" onPress={calculateTotal} />
      </View>

      {/* Clear Selections Button */}
      <View style={styles.buttonContainer}>
        <Button title="Clear Selections" color="red" onPress={clearSelections} />
      </View>

      {/* Displaying the Total Price */}
      {totalPrice > 0 && (
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total: R{totalPrice}</Text>
        </View>
      )}

      {/* Go to Login Button */}
      <View style={styles.buttonContainer}>
        <Button title="Go to Login" color="green" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  logo: { width: 100, height: 100, marginRight: 15 },
  title: { fontSize: 25, fontWeight: 'bold', color: '#002366' },
  welcomeMessage: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  courseSection: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 10, padding: 10 },
  leftHalf: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  rightHalf: { flex: 1, justifyContent: 'center' },
  courseImage: { width: 125, height: 125 },
  courseTitle: { fontSize: 16, color: '#002366', marginBottom: 10 },
  picker: { height: 50 },
  priceBlock: { backgroundColor: '#02949c', borderRadius: 10, padding: 5, marginTop: 10 },
  priceText: { fontSize: 16, color: '#fff', textAlign: 'center' },
  buttonContainer: { marginTop: 10 },
  totalPriceContainer: { marginTop: 10, padding: 10, backgroundColor: '#e0e0e0', borderRadius: 10 },
  totalPriceText: { fontSize: 16, fontWeight: 'bold', color: '#002366', textAlign: 'center' },
});

export default HomeScreen;

