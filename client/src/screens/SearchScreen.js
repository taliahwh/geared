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
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';

// Components
import FilterSearchModal from '../components/FilterSearchModal';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/SearchScreenStyles';

// Actions
import { searchPosts } from '../actions/postActions';

const windowWidth = Dimensions.get('window').width / 3;

const SearchResult = ({ postImage }) => {
  console.log('test');
  return (
    <Image
      style={styles.itemContainer}
      resizeMode="cover"
      source={{
        uri: postImage,
      }}
    />
  );
};

const SearchScreen = () => {
  // Hooks
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);

  // Redux state
  const {
    loading: loadingSearchResults,
    searchResults,
    numResults,
    error: errorSearchResults,
  } = useSelector((state) => state.searchPosts);

  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
  ]);

  const searchQuery = () => {
    dispatch(searchPosts(query));
  };

  return (
    <View style={styles.container}>
      {/* Search Input Header */}
      <View style={styles.headerContainer}>
        <View style={styles.textInputContainer}>
          <View style={styles.inputAndIcon}>
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
              maxLength={50}
            />
          </View>
          {!query.length ? (
            <Ionicons
              name="checkmark"
              size={25}
              color={'transparent'}
              style={styles.confirmIcon}
            />
          ) : (
            <Pressable onPress={searchQuery}>
              <Ionicons
                name="checkmark"
                size={25}
                color={theme.PRIMARY_COLOR}
                style={styles.confirmIcon}
              />
            </Pressable>
          )}
        </View>

        {/* Filter Component */}
        {!query.length ? (
          <Ionicons name="md-options" size={24} color={theme.MEDIUM_GRAY} />
        ) : (
          <Pressable onPress={() => setOptionsModalVisible(true)}>
            <Ionicons name="md-options" size={24} color={theme.LIGHT_GRAY} />
          </Pressable>
        )}
      </View>

      {/* Search Results Grid */}

      {loadingSearchResults && (
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator />
        </View>
      )}

      {numResults > 0 && searchResults && (
        <SectionGrid
          itemDimension={windowWidth}
          // staticDimension={windowWidth}
          // fixed
          spacing={7}
          sections={[
            {
              title: 'Search Results',
              data: searchResults,
            },
          ]}
          style={styles.gridView}
          renderItem={({ item }) => (
            <SearchResult postImage={item.images[0].imgUrl} />
          )}
        />
      )}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={optionsModalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setOptionsModalVisible(!optionsModalVisible);
        }}
      >
        <FilterSearchModal hideModal={() => setOptionsModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default SearchScreen;
