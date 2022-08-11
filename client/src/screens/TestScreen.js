import React, { useState } from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const TestScreen = () => {
  const [commentBody, setCommentBody] = useState('');
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View>
          <Text>Text</Text>
          <TextInput
            style={styles.textInput}
            value={commentBody}
            onChangeText={(text) => setCommentBody(text)}
            placeholder={'Say something...'}
            placeholderTextColor={'#a1a1aa'}
            maxLength={400}
            multiline
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    marginTop: 500,
  },
});

export default TestScreen;
