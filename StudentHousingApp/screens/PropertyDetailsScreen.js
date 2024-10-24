// screens/PropertyDetailsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { getRentListingsByCity } from '../RentCastAPI'; // Import RentCast API function

export default function PropertyDetailsScreen({ route, navigation }) {
//   const { propertyId, city } = route.params; // Get property ID and city from navigation params
  const [property, setProperty] = useState(null);
  const [nearbyListings, setNearbyListings] = useState([]);

  // Fetch property details and nearby rental listings
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        // const rentalData = await getRentListingsByCity(city, 10); // Fetch nearby listings within a 10-mile radius
        // setNearbyListings(rentalData);
        console.error('Success');
      } catch (error) {
        console.error('Error fetching rental listings:', error);
      }
    };

    fetchPropertyDetails();
  });

  return (
    <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>{'Village Square Apartments: 8683 Via Mallorca, La Jolla, CA 92037'}</Text>
        <Text>
            {'Price: $2,483 / month \n'}
        </Text>
        <Text>
            {'Bedrooms: 1 bedroom \n'}
        </Text>
        <Text>
            {'Bathrooms: 1 bathroom \n'}
        </Text>
        <Text>
            {"Description: Effortless living begins at Village Square Apartments. Just minutes away from the University of California, this modern community surrounds you with your favorite luxuries at home and the finest local attractions San Diego has to offer. Explore everything worth enjoying about our La Jolla Village apartments and become our newest resident!Our prime location puts you near prestigious employers such as Qualcomm and Scripps Health, top-tier universities like UC San Diego, and popular attractions like La Jolla Cove, Birch Aquarium, and the Torrey Pines State Reserve. Moreover, you'll have easy access to Interstate 5, public transportation, and plenty of shopping and entertainment options. Call us to claim one of these apartments in La Jolla, CA today!Greystar California, Inc. dba Greystar Corp. License No. 1525765 Broker: Gerard S. Donohue License No. 01265072"}
        </Text>
    </View>
  );
}