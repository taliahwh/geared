import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector, useDispatch } from 'react-redux';

// Tab Screens
import ManageRoute from './ManageRoutes';
import PaymentsRoute from './PaymentsRoute';
import ProfileSettingsRoute from './ProfileSettingsRoute';
import { getAuthUserDetails } from '../actions/userActions';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  manage: ManageRoute,
  payments: PaymentsRoute,
  settings: ProfileSettingsRoute,
});

const Header = ({ children }) => {
  return <View style={styles.loadingHeader}>{children}</View>;
};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    renderLabel={({ route }) => <Text style={styles.label}>{route.title}</Text>}
  />
);

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'manage', title: 'Manage' },
    { key: 'payments', title: 'Payments' },
    { key: 'settings', title: 'Settings' },
  ]);

  const {
    loading: loadingUserDetails,
    userDetails,
    error: errorUserDetails,
  } = useSelector((state) => state.authUserDetails);
  const { success: successUpdateProfile } = useSelector(
    (state) => state.userUpdateProfile
  );

  useEffect(() => {
    dispatch(getAuthUserDetails());
  }, [dispatch, successUpdateProfile]);

  return (
    <>
      {loadingUserDetails && (
        <Header>
          <ActivityIndicator size={'small'} />
        </Header>
      )}
      {errorUserDetails && (
        <Header>
          <Text>{errorUserDetails}</Text>
        </Header>
      )}
      {userDetails && (
        <ImageBackground
          style={styles.headerContainer}
          blurRadius={80}
          source={{
            uri: userDetails.profileImage,
          }}
        >
          <Image
            style={styles.userImage}
            source={{
              uri: userDetails.profileImage,
            }}
          />
          <Text style={styles.welcomeTitle}>
            {`Hey, @${userDetails.username}`}
          </Text>
        </ImageBackground>
      )}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#27272a',
    fontWeight: '600',
  },
  indicator: {
    backgroundColor: '#404040',
  },
  tabBar: {
    backgroundColor: 'white',
  },
  headerContainer: {
    // backgroundColor: 'orange',
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 30,
  },
  userImage: {
    borderRadius: 1000,
    marginRight: 15,
    height: 60,
    width: 60,
  },
  welcomeTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  dashboardContainer: {
    paddingTop: 10,
  },
  loadingHeader: {
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
