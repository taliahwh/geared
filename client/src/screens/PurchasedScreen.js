import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import PurchasedCard from '../components/PurchasedCard';
import AlertMessage from '../components/AlertMessage';

// Actions

const PurchasedScreen = ({ route }) => {
  // Hooks

  const scrollRef = useRef(null);
  useScrollToTop(scrollRef);
  const dispatch = useDispatch();

  // const renderItem = ({ item }) => {
  //   // console.log(item);
  //   return (
  //     <FollowersCard
  //       name={item.name}
  //       username={item.username}
  //       profileImage={item.profileImage}
  //       followerId={item._id}
  //     />
  //   );
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(viewFollowers(userId));
  //   }, [dispatch])
  // );

  return (
    // <>
    //   {errorFollowers && (
    //     <View style={styles.centered}>
    //       <AlertMessage>{errorFollowers}</AlertMessage>
    //     </View>
    //   )}

    //   {loadingFollowers && (
    //     <View style={styles.centered}>
    //       <ActivityIndicator />
    //     </View>
    //   )}

    //   {followers && followers.length > 0 && (
    //     <View style={styles.container}>
    //       <FlatList
    //         ref={scrollRef}
    //         data={followers.reverse()}
    //         renderItem={renderItem}
    //         keyExtractor={(item) => item._id}
    //       />
    //     </View>
    //   )}

    //   {followers && followers.length === 0 && (
    //     <View style={styles.centered}>
    //       <Text style={styles.text}>No followers.</Text>
    //     </View>
    //   )}
    // </>
    <View style={styles.container}>
      <PurchasedCard
        username={'buy_thebook'}
        profileImage={
          'https://fansided.com/wp-content/uploads/getty-images/2018/11/156442268.jpeg'
        }
        orderStatus={'Awaiting shipping'}
        purchasedDate={'PURCHASED NOW'}
        itemImage={
          'https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/01/Top-Luka-Doncic-Rookie-Cards-thumb-300.jpg'
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
  },
});

export default PurchasedScreen;
