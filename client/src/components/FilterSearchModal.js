import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/FilterSearchModalStyles';
import theme from '../styles/styles.theme';

const AddressContainer = ({
  name,
  streetAddressOne,
  streetAddressTwo,
  city,
  state,
  zipCode,
  country,
}) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.address}>
        {name}, {streetAddressOne}
        {streetAddressTwo ? `, ${streetAddressTwo}` : ''}, {city}, {state},{' '}
        {zipCode}, {country}
      </Text>

      <View style={styles.chevronContainer}>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={theme.MEDIUM_GRAY}
        />
      </View>
    </View>
  );
};

const FilterSearchModal = ({ hideModal }) => {
  const [forSale, setForSale] = useState(false);
  const toggleForSale = () => setForSale((prevState) => !prevState);

  const [brandNew, setBrandNew] = useState(false);
  const toggleBrandNew = () => setBrandNew((prevState) => !prevState);

  const [excellent, setExcellent] = useState(false);
  const toggleExcellent = () => setExcellent((prevState) => !prevState);

  const [good, setGood] = useState(false);
  const toggleGood = () => setGood((prevState) => !prevState);

  const [fair, setFair] = useState(false);
  const toggleFair = () => setFair((prevState) => !prevState);

  const [likeNew, setLikeNew] = useState(false);
  const toggleLikeNew = () => setLikeNew((prevState) => !prevState);

  const [conditionOptionsOpen, setConditionOptionsOpen] = useState(false);

  const resetState = () => {
    setForSale(false);
    setBrandNew(false);
    setExcellent(false);
    setGood(false);
    setFair(false);
    setLikeNew(false);
  };

  return (
    <View style={styles.screenView}>
      <View style={styles.modalView}>
        <View style={styles.headerContainer}>
          {/* <View style={styles.swipeBar} /> */}

          <View style={styles.header}>
            <Pressable onPress={hideModal}>
              <Ionicons name="close" size={24} color={theme.LIGHT_GRAY} />
            </Pressable>

            <Text style={styles.headerTitle}>Filter</Text>
            <Pressable onPress={resetState}>
              <Text style={styles.resetEnabled}>Reset</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.modalBody}>
          <ScrollView style={styles.optionsContainer}>
            {/* Condition */}
            <View style={styles.filterOption}>
              <Text style={styles.optionHeading}>Condition</Text>
              {conditionOptionsOpen ? (
                <Pressable onPress={() => setConditionOptionsOpen(false)}>
                  <Ionicons
                    name="chevron-down"
                    size={21}
                    color={theme.MEDIUM_GRAY}
                    style={{ marginLeft: 5 }}
                  />
                </Pressable>
              ) : (
                <Pressable onPress={() => setConditionOptionsOpen(true)}>
                  <Ionicons
                    name="chevron-forward"
                    size={21}
                    color={theme.MEDIUM_GRAY}
                    style={{ marginLeft: 5 }}
                  />
                </Pressable>
              )}
            </View>

            {conditionOptionsOpen && (
              <View>
                <View style={styles.filterOption}>
                  <Text style={styles.optionHeading}>Brand new</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={brandNew ? theme.PRIMARY_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      toggleBrandNew();
                      setLikeNew(false);
                      setExcellent(false);
                      setGood(false);
                      setFair(false);
                    }}
                    value={brandNew}
                  />
                </View>

                <View style={styles.filterOption}>
                  <Text style={styles.optionHeading}>Like new</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={likeNew ? theme.PRIMARY_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      toggleLikeNew();
                      setBrandNew(false);
                      setExcellent(false);
                      setGood(false);
                      setFair(false);
                    }}
                    value={likeNew}
                  />
                </View>

                <View style={styles.filterOption}>
                  <Text style={styles.optionHeading}>Used - Excellent</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={excellent ? theme.PRIMARY_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      toggleExcellent();
                      setLikeNew(false);
                      setBrandNew(false);
                      setGood(false);
                      setFair(false);
                    }}
                    value={excellent}
                  />
                </View>

                <View style={styles.filterOption}>
                  <Text style={styles.optionHeading}>Used - Good</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={good ? theme.PRIMARY_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      toggleGood();
                      setLikeNew(false);
                      setExcellent(false);
                      setBrandNew(false);
                      setFair(false);
                    }}
                    value={good}
                  />
                </View>

                <View style={styles.filterOption}>
                  <Text style={styles.optionHeading}>Used - Fair</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={fair ? theme.PRIMARY_COLOR : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      toggleFair();
                      setLikeNew(false);
                      setExcellent(false);
                      setGood(false);
                      setBrandNew(false);
                    }}
                    value={fair}
                  />
                </View>
              </View>
            )}
            {/* For sale */}
            <View style={styles.filterOption}>
              <Text style={styles.optionHeading}>For sale</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={forSale ? theme.PRIMARY_COLOR : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleForSale}
                value={forSale}
              />
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={() => console.log('Add new address')}
            activeOpacity={0.8}
            style={styles.btnContainer}
          >
            <View>
              <Text style={styles.viewResultsBtn}>View search results</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FilterSearchModal;
