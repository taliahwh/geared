import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const textInputHeight = Dimensions.get('window').height / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_MODE,
    padding: 15,
    // justifyContent: 'space-between',
  },
  reportContainer: {},
  textInput: {
    backgroundColor: theme.FEED_BACKGROUND,
    height: textInputHeight,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    borderRadius: 5,
    marginBottom: 7,
    color: theme.LIGHT_GRAY,
  },
  wordCount: {
    textAlign: 'right',
    color: theme.DARK_GRAY,
  },
  sendBtn: {
    backgroundColor: theme.LIGHT_GRAY,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
    paddingVertical: 9,
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 20,
  },
});

export default styles;
