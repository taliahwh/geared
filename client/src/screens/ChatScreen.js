import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('PostDetails', {
            itemId: 1,
          });
        }}
      >
        <View style={styles.productInfoContainer}>
          <Image
            style={styles.productImage}
            source={require('../assets/test-images/IMG_1676.jpg')}
          />
          <Text style={styles.description}>
            2017-2018 Bam Adebayo Panini Contenders Rookie Auto 49/65
          </Text>
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#737373"
            />
          </View>
        </View>
      </TouchableOpacity>

      {/* <View style={styles.productInfoContainer}>
        <Text>Chat container</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // paddingHorizontal: 15,
  },
  productInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    // backgroundColor: 'green',
    padding: 15,
    borderBottomWidth: 1.5,
    borderColor: theme.BORDER_COLOR,
    height: 100,
    alignItems: 'center',
  },
  productImage: {
    flex: 2,
    height: '100%',
  },
  description: {
    fontSize: 15,
    flex: 7,
    paddingLeft: 10,
  },
  iconContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'flex',
    alignItems: 'flex-end',
  },
});

export default ChatScreen;
