// screens/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import { firebase } from '../firebase'; // Import Firebase setup
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [bio, setBio] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const userId = firebase.auth().currentUser.uid; // Current logged in user's ID

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileData = await firebase.firestore().collection('users').doc(userId).get();
      const data = profileData.data();
      if (data) {
        setBio(data.bio || '');
        setContactInfo(data.contactInfo || '');
        setProfilePicture(data.profilePicture || null);
      }
    };

    fetchProfileData();
  }, []);

  const updateProfile = async () => {
    await firebase.firestore().collection('users').doc(userId).update({
      bio,
      contactInfo,
      profilePicture,
    });
    Alert.alert('Profile updated successfully!');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
      // Optional: You could upload this image to Firebase Storage here and save the URL in Firestore.
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {profilePicture && <Image source={{ uri: profilePicture }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
      <Button title="Pick Profile Picture" onPress={pickImage} />

      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Contact Info"
        value={contactInfo}
        onChangeText={setContactInfo}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <Button title="Update Profile" onPress={updateProfile} />
    </View>
  );
}
