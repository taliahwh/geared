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
import { SectionGrid } from 'react-native-super-grid';

// Components
import FilterSearchModal from '../components/FilterSearchModal';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/SearchScreenStyles';

// Actions
import { searchPosts } from '../actions/postActions';

const windowWidth = Dimensions.get('window').width / 3;

const SearchResult = ({ postImage }) => {
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

  // Filter Modal State
  const [forSale, setForSale] = useState(false);
  const toggleForSale = () => setForSale((prevState) => !prevState);

  const [brandNew, setBrandNew] = useState(false);
  const toggleBrandNew = () => setBrandNew((prevState) => !prevState);

  const [likeNew, setLikeNew] = useState(false);
  const toggleLikeNew = () => setLikeNew((prevState) => !prevState);

  const [excellent, setExcellent] = useState(false);
  const toggleExcellent = () => setExcellent((prevState) => !prevState);

  const [good, setGood] = useState(false);
  const toggleGood = () => setGood((prevState) => !prevState);

  const [fair, setFair] = useState(false);
  const toggleFair = () => setFair((prevState) => !prevState);

  const [filterSelected, setFilterSelected] = useState(false);
  const [condition, setCondition] = useState(null);

  const resetState = () => {
    setForSale(false);
    setBrandNew(false);
    setExcellent(false);
    setGood(false);
    setFair(false);
    setLikeNew(false);
    setCondition(null);
  };

  // Redux state
  const {
    loading: loadingSearchResults,
    searchResults,
    numResults,
    success: successSearchResults,
    error: errorSearchResults,
  } = useSelector((state) => state.searchPosts);

  const searchQuery = () => {
    dispatch(searchPosts(query));
  };

  const searchWithFilters = () => {
    console.log(`Query: ${query}`);
    console.log(`Filter selected: ${filterSelected}`);
  };

  const clearQuery = () => {
    setQuery('');
  };

  return (
    <>
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
                onSubmitEditing={searchQuery}
                returnKeyType="search"
              />
            </View>
            {!query.length ? (
              <Ionicons
                name="close-circle"
                size={24}
                color={'transparent'}
                style={styles.confirmIcon}
              />
            ) : (
              <Pressable onPress={clearQuery}>
                <Ionicons
                  name="close-circle"
                  size={24}
                  color={theme.MEDIUM_GRAY}
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
          <FilterSearchModal
            hideModal={() => setOptionsModalVisible(false)}
            toggleForSale={toggleForSale}
            toggleBrandNew={toggleBrandNew}
            toggleLikeNew={toggleLikeNew}
            toggleExcellent={toggleExcellent}
            toggleGood={toggleGood}
            toggleFair={toggleFair}
            resetState={resetState}
            forSale={forSale}
            setForSale={setForSale}
            condition={condition}
            setCondition={setCondition}
            brandNew={brandNew}
            setBrandNew={setBrandNew}
            likeNew={likeNew}
            setLikeNew={setLikeNew}
            excellent={excellent}
            setExcellent={setExcellent}
            good={good}
            setGood={setGood}
            fair={fair}
            setFair={setFair}
            setFilterSelected={setFilterSelected}
            searchWithFilters={searchWithFilters}
          />
        </Modal>
      </View>

      {/* No results found */}
      {numResults === 0 && successSearchResults && (
        <View style={styles.centeredContainer}>
          <Text style={styles.noResultsText}>No cards found</Text>
        </View>
      )}
    </>
  );
};

export default SearchScreen;
