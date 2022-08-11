import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const EditBioScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        value={'Edit Bio screen'}
        autoFocus={true}
        returnKeyType="done"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalInputcontainer: {
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 5,
    paddingLeft: 5,
  },
  modalInputText: {
    fontSize: 15,
    color: '#000',
  },
});

export default EditBioScreen;
