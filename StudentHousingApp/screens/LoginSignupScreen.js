// screens/LoginSignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// Import Firebase setup

export default function LoginSignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const auth = getAuth();
    // Email/Password Authentication
    const handleAuth = () => {
        if (isLogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    Alert.alert('Login Successful');
                    navigation.navigate('PropertyList');
                })
                .catch(error => {
                    Alert.alert('Login Failed', error.message);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    Alert.alert('Signup Successful');
                    navigation.navigate('PropertyList');
                })
                .catch(error => {
                    Alert.alert('Signup Failed', error.message);
                });
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                {isLogin ? 'Login' : 'Signup'}
            </Text>

            <TextInput
                style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title={isLogin ? 'Login' : 'Signup'} onPress={handleAuth} />

            <Text
                style={{ color: 'blue', marginTop: 20, textAlign: 'center' }}
                onPress={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Text>
        </View>
    );
}
