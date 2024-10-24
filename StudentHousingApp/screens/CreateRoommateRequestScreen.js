// screens/CreateRoommateRequestScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firebase } from '../firebase'; // Import Firebase setup

export default function CreateRoommateRequestScreen({ route, navigation }) {
  const { propertyId } = route.params;
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = async () => {
    if (!description || !numberOfPeople || !preferences) {
      Alert.alert('Please fill out all fields');
      return;
    }

    // Save the roommate request in Firebase under the specific property
    await firebase.firestore().collection('properties')
      .doc(propertyId)
      .collection('roommateRequests')
      .add({
        description,
        numberOfPeople,
        preferences,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

    Alert.alert('Roommate request created!');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Number of People"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Preferences (e.g., non-smokers)"
        value={preferences}
        onChangeText={setPreferences}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <Button title="Submit Roommate Request" onPress={handleSubmit} />
    </View>
  );
}