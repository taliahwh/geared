import React, { useState } from 'react';

import { Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Styles
import theme from '../styles/styles.theme';

import AuthCollectionRoute from '../components/AuthProfile/AuthCollectionRoute';
import LikesRoute from './LikesRoute';
import SavedRoute from './SavedRoute';
import ReviewsRoute from './ReviewsRoute';
import TestRoute from './TestRoute';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  collection: AuthCollectionRoute,
  likes: LikesRoute,
  saved: SavedRoute,
  reviews: ReviewsRoute,
  test: TestRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    renderLabel={({ route }) => <Text style={styles.label}>{route.title}</Text>}
  />
);

const ProfileScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'collection', title: 'Collection' },
    { key: 'likes', title: 'Likes' },
    { key: 'saved', title: 'Saved' },
    { key: 'reviews', title: 'Reviews' },
    // { key: 'test', title: 'Test' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  label: {
    color: '#27272a',
    fontWeight: '600',
  },
  indicator: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  tabBar: {
    backgroundColor: 'white',
  },
});

export default ProfileScreen;
