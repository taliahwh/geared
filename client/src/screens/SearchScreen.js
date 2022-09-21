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
import { useNavigation, useScrollToTop } from '@react-navigation/native';

// Components
import FilterSearchModal from '../components/FilterSearchModal';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/SearchScreenStyles';

// Actions
import { searchPosts } from '../actions/postActions';

const windowWidth = Dimensions.get('window').width / 3;

const SearchResult = ({ postImage, id }) => {
  const navigation = useNavigation();
  const navigateToPostDetails = (id) => {
    navigation.navigate('PostDetails', { postId: id });
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToPostDetails(id)}
      activeOpacity={0.8}
    >
      <Image
        style={styles.itemContainer}
        resizeMode="cover"
        source={{
          uri: postImage,
        }}
      />
    </TouchableOpacity>
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

  const [mensBasketball, setMensBasketball] = useState(false);
  const toggleMensBasketball = () =>
    setMensBasketball((prevState) => !prevState);

  const [womensBasketball, setWomensBasketball] = useState(false);
  const toggleWomensBasketball = () =>
    setWomensBasketball((prevState) => !prevState);

  const [soccer, setSoccer] = useState(false);
  const toggleSoccer = () => setSoccer((prevState) => !prevState);

  const [football, setFootball] = useState(false);
  const toggleFootball = () => setFootball((prevState) => !prevState);

  const [tennis, setTennis] = useState(false);
  const toggleTennis = () => setTennis((prevState) => !prevState);

  const [hockey, setHockey] = useState(false);
  const toggleHockey = () => setHockey((prevState) => !prevState);

  const [baseball, setBaseball] = useState(false);
  const toggleBaseball = () => setBaseball((prevState) => !prevState);

  const [cardType, setCardType] = useState(null);
  const noCardTypeSelected =
    !mensBasketball &&
    !womensBasketball &&
    !soccer &&
    !football &&
    !tennis &&
    !hockey &&
    !baseball;

  const [filterSelected, setFilterSelected] = useState(false);

  const [condition, setCondition] = useState(null);
  const noConditionSelected =
    !brandNew && !likeNew && !excellent && !good && !fair;

  const resetState = () => {
    setForSale(false);
    setBrandNew(false);
    setExcellent(false);
    setGood(false);
    setFair(false);
    setLikeNew(false);
    setCondition(null);
    setBaseball(false);
    setFootball(false);
    setTennis(false);
    setSoccer(false);
    setWomensBasketball(false);
    setMensBasketball(false);
    setHockey(false);
    setCardType(null);
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
    console.log(`For sale: ${forSale}`);
    console.log(`Condition: ${condition}`);
    console.log(`Condition selected: ${!noConditionSelected}`);
    console.log(`Sport: ${cardType}`);
    console.log(`Card type selected: ${!noCardTypeSelected}`);

    // -> SEARCH FOR QUERY (UNFILTERED)
    if (!forSale && noConditionSelected && noCardTypeSelected) {
      dispatch(searchPosts(query, 'QUERY'));
    }

    // -> SEARCH FOR SALE & QUERY
    if (forSale && noConditionSelected && noCardTypeSelected) {
      dispatch(searchPosts(query, 'SALE_QUERY'));
    }

    // -> SEARCH FOR CONDITION & QUERY
    if (!forSale && !noConditionSelected && noCardTypeSelected) {
      dispatch(searchPosts(query, 'CONDITION_QUERY', false, true, condition));
    }

    // -> SEARCH FOR CARD TYPE
    if (!noCardTypeSelected && !forSale && noConditionSelected) {
      dispatch(
        searchPosts(
          query,
          'CARD_TYPE_QUERY',
          false,
          false,
          null,
          true,
          cardType
        )
      );
    }

    // -> SEARCH FOR CONDITION & FOR SALE & QUERY
    if (forSale && !noConditionSelected && noCardTypeSelected) {
      dispatch(
        searchPosts(query, 'SALE_CONDITION_QUERY', true, true, condition)
      );
    }

    // -> SEARCH FOR SALE & CARD TYPE & QUERY
    if (forSale && noConditionSelected && !noCardTypeSelected) {
      dispatch(
        searchPosts(
          query,
          'SALE_CARD_TYPE_QUERY',
          true,
          false,
          null,
          true,
          cardType
        )
      );
    }

    // -> SEARCH FOR CONDITION & CARD TYPE & QUERY
    if (!forSale && !noConditionSelected && !noCardTypeSelected) {
      dispatch(
        searchPosts(
          query,
          'CONDITION_CARD_TYPE_QUERY',
          false,
          true,
          condition,
          true,
          cardType
        )
      );
    }

    // -> SEARCH WITH ALL FILTERS -> QUERY, CONDITION, FOR SALE, CARD TYPE
    if (forSale && !noConditionSelected && !noCardTypeSelected) {
      dispatch(
        searchPosts(query, 'ALL_FILTERS', true, true, condition, true, cardType)
      );
    }
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
                keyboardAppearance="dark"
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
              <SearchResult postImage={item.images[0].imgUrl} id={item._id} />
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
            womensBasketball={womensBasketball}
            setWomensBasketball={setWomensBasketball}
            toggleWomensBasketball={toggleWomensBasketball}
            mensBasketball={mensBasketball}
            setMensBasketball={setMensBasketball}
            toggleMensBasketball={toggleMensBasketball}
            soccer={soccer}
            setSoccer={setSoccer}
            toggleSoccer={toggleSoccer}
            football={football}
            setFootball={setFootball}
            toggleFootball={toggleFootball}
            tennis={tennis}
            setTennis={setTennis}
            toggleTennis={toggleTennis}
            hockey={hockey}
            setHockey={setHockey}
            toggleHockey={toggleHockey}
            baseball={baseball}
            setBaseball={setBaseball}
            toggleBaseball={toggleBaseball}
            cardType={cardType}
            setCardType={setCardType}
            setFilterSelected={setFilterSelected}
            searchWithFilters={searchQuery}
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
