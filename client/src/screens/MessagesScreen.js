import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import MessagePreview from '../components/MessagePreview';
import AlertMessage from '../components/AlertMessage';

// Actions
import { getLatestMessages } from '../actions/userActions';

// Styles
import theme from '../styles/styles.theme';

const MessagesScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    loading: loadingLatestMessages,
    messages: latestMessages,
    error: errorLatestMessage,
  } = useSelector((state) => state.latestMessages);

  const navigateToTestScreen = () => {
    navigation.navigate('Test');
  };

  const navigateToMessages = (username, profileImage, userId) => {
    navigation.navigate('Chat', {
      username,
      profileImage,
      userId,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getLatestMessages());
    }, [dispatch])
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigateToMessages(item.username, item.profileImage, item.userId)
        }
      >
        <MessagePreview
          name={item.name}
          messagePreview={item.message.text}
          dateSent={item.timeSent}
          // productImage={'https://i.pinimg.com/originals/d8/aa/8f/d8aa8f6987714957e06ce0fb416641ef.jpg'}
          senderImage={item.profileImage}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      {errorLatestMessage && (
        <View style={styles.centeredContainer}>
          <AlertMessage>{errorLatestMessage}</AlertMessage>
        </View>
      )}

      {loadingLatestMessages && (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )}

      {latestMessages && !latestMessages.length && (
        <View style={styles.centeredContainer}>
          <Text style={styles.noMessagesText}>No messages.</Text>
        </View>
      )}

      {latestMessages && latestMessages.length > 0 && (
        <View style={styles.container}>
          <FlatList
            data={latestMessages}
            renderItem={renderItem}
            keyExtractor={(item) => item.userId}
            initialNumToRender={10}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  centeredContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.FEED_BACKGROUND,
  },
  noMessagesText: {
    fontStyle: 'italic',
    color: theme.LIGHT_GRAY,
  },
  text: {
    fontWeight: '500',
  },
});

export default MessagesScreen;
