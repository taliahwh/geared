import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import theme from '../styles/styles.theme';

const maxBubbleWidth = Dimensions.get('window').width / 1.85;

const ChatInput = ({ sent, recieved, message }) => {
  return (
    <>
      {sent && (
        <View style={styles.sentBubbleContainer}>
          <Text style={styles.sentBubble}>{message}</Text>
        </View>
      )}

      {recieved && (
        <View style={styles.recievedBubbleContainer}>
          <Text style={styles.recievedBubble}>{message}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sentBubbleContainer: {
    // backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 6,
  },
  sentBubble: {
    backgroundColor: theme.PRIMARY_COLOR,
    fontSize: 15,
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    maxWidth: maxBubbleWidth,
    overflow: 'hidden',
    borderTopLeftRadius: 10, //Top Left Corner
    borderTopRightRadius: 10, // Top Right Corner
    borderBottomLeftRadius: 10, // Bottom Left Corner
    borderBottomRightRadius: 5, // Bottom Right Corner
    // position: 'absolute',
  },
  recievedBubbleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  recievedBubble: {
    backgroundColor: theme.BORDER_COLOR,
    fontSize: 15,
    color: '#000',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    maxWidth: maxBubbleWidth,
    marginBottom: 6,
  },
});

export default ChatInput;
