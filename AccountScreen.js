import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccountScreen = ({ navigation }) => {
  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.content}>
        <Text style={styles.name}>Nguyễn Hoàng Thanh Tùng</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, 
          now I am learning React Native
        </Text>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e3e3e3' },

  header: { width: '100%', height: 150, backgroundColor: '#03cefc' },

  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 40,
    marginTop: -50,
  },

  name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  role: { fontSize: 16, color: '#03cefc', marginVertical: 5 },
  description: { fontSize: 14, textAlign: 'center', marginVertical: 10, color: '#555' },

  signOutButton: { backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 },
  signOutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default AccountScreen;
