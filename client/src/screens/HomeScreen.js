import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';

// Tabs
import FollowingRoute from './FollowingRoute';
import ExploreRoute from './ExploreRoute';

// Styles
import theme from '../styles/styles.theme';

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

const HomeScreen = () => {
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  // scene: {
  //   flex: 1,
  // },
  label: {
    color: theme.LIGHT_GRAY,
    fontWeight: '600',
  },
  indicator: {
    backgroundColor: theme.LIGHT_GRAY,
  },
  tabBar: {
    backgroundColor: theme.DARK_MODE,
  },
});

export default HomeScreen;
