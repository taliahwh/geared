import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';

// Tabs
import FollowingRoute from './FollowingRoute';
import ExploreRoute from './ExploreRoute';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  explore: ExploreRoute,
  following: FollowingRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    renderLabel={({ route }) => <Text style={styles.label}>{route.title}</Text>}
  />
);

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'explore', title: 'Explore' },
    { key: 'following', title: 'Following' },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
      <StatusBar style="dark" />
    </>
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
    backgroundColor: '#27272a',
  },
  tabBar: {
    backgroundColor: 'white',
  },
});

export default HomeScreen;
