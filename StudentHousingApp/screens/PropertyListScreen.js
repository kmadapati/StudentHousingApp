// screens/PropertyListScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { getRentListingsByCity } from '../RentCastAPI'; // Import RentCast API function

export default function PropertyListScreen({ navigation }) {
  const [properties, setProperties] = useState([]);
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [radius, setRadius] = useState('');

  const loadProperties = async () => {
    try {
    //   const rentalData = await getRentListingsByCity(location, radius, bathrooms, bedrooms);
        console.log("Success")
        navigation.navigate("PropertyDetail");
    //   setProperties(rentalData); // Set state with rental data
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Enter city"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Radius"
        keyboardType="numeric"
        value={String(radius)}
        onChangeText={text => setRadius(Number(text))}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Minimum Bathrooms"
        keyboardType="numeric"
        value={String(bathrooms)}
        onChangeText={text => setBathrooms(Number(text))}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Minimum Bedrooms"
        keyboardType="numeric"
        value={String(bedrooms)}
        onChangeText={text => setBedrooms(Number(text))}
      />

      <Button title="Search" onPress={loadProperties} />
    </View>
  );
}
