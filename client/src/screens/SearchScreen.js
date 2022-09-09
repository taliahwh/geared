import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/SearchScreenStyles';

const windowWidth = Dimensions.get('window').width / 3;

const SearchResult = ({ imageUrl }) => {
  return (
    <Image
      style={styles.itemContainer}
      resizeMode="cover"
      source={{
        uri: 'https://res.cloudinary.com/geared/image/upload/v1660571880/post-images/image_876545.jpg',
      }}
    />
  );
};

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <View style={styles.container}>
      {/* Search Input Header */}
      <View style={styles.headerContainer}>
        <View style={styles.textInputContainer}>
          <Ionicons
            name="search"
            size={19}
            color={theme.DARK_MODE_BORDER}
            style={styles.searchIcon}
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={'Search for cards'}
            placeholderTextColor={theme.DARK_MODE_BORDER}
            style={styles.textInput}
          />
        </View>
        <Ionicons
          name="checkmark"
          size={25}
          color={theme.LIGHT_GRAY}
          style={styles.searchIcon}
        />
      </View>

      {/* <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: 'red' }]} />
          // <SearchResult />
        )}
      /> */}

      <SectionGrid
        itemDimension={windowWidth}
        // staticDimension={windowWidth}
        // fixed
        spacing={7}
        sections={[
          {
            title: 'Title1',
            data: items.slice(0, 7),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => <SearchResult />}
      />
    </View>
  );
};

export default SearchScreen;
