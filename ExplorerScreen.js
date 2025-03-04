import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'Pizza', image: require('./assets/pizza.png') },
  { id: '2', name: 'Burgers', image: require('./assets/burger.png') },
  { id: '3', name: 'Steak', image: require('./assets/steak.png') },
  { id: '4', name: 'Spaghetti', image: require('./assets/spaghetti.png') },
];

const popularItems1 = [
  { id: '1', name: 'Food 1', price: '20$', image: require('./assets/food1.png') },
  { id: '2', name: 'Food 2', price: '13$', image: require('./assets/food2.png') },
];

const popularItems2 = [
  { id: '3', name: 'Phở', price: '20$', image: require('./assets/food1.png'), discount: '10% OFF' },
  { id: '4', name: 'Bánh mì', price: '13$', image: require('./assets/food2.png') },
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="location-outline" size={20} color="#555" style={{ marginRight: 10 }} />
        <TextInput 
          placeholder="Search for meals or area" 
          style={{ flex: 1, fontSize: 16 }} 
        />
        <Icon name="search-outline" size={20} color="#555" />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={item.image} style={styles.itemImageSmall} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemOrigin}>By Viet Nam</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCardLarge}>
            <Image source={item.image} style={styles.itemImageLarge} />
            {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  
  input: { flex: 1, marginLeft: 10 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: 'orange' },
  viewAllText: { color: 'orange' },
  category: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 100, height: 120, borderRadius: 10 },
  categoryText: { marginTop: 5, fontWeight: 'bold' },

  itemRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginRight: 10, 
    padding: 10, 
    elevation: 2 
  },
  itemImageSmall: { width: 100, height: 100, borderRadius: 10 },
  itemInfo: { marginLeft: 10 },
  itemName: { fontWeight: 'bold', fontSize: 16 },
  itemOrigin: { fontSize: 12, color: '#777' },
  itemPrice: { fontSize: 14, fontWeight: 'bold', color: '#000' },

  itemCardLarge: { width: 200, marginRight: 15, backgroundColor: '#fff', borderRadius: 15, overflow: 'hidden', elevation: 3 },
  itemImageLarge: { width: '100%', height: 130, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  discount: { position: 'absolute', top: 5, left: 5, backgroundColor: 'red', color: '#fff', paddingHorizontal: 5, borderRadius: 5, fontSize: 12 },
});

export default ExplorerScreen;
