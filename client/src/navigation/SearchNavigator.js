import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

import { HeaderBack } from '../components/HeaderBackImages';

// Styles
import theme from '../styles/styles.theme';

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      options={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeSearch"
        component={SearchScreen}
        options={{
          headerTitle: 'Search',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.DARK_MODE,
          },
          headerTitleStyle: { color: theme.LIGHT_GRAY, fontWeight: '700' },
          headerBackTitle: false,
        }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetailsScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerBackImage: HeaderBack,
          headerStyle: {
            backgroundColor: theme.DARK_MODE,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
