import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';

const MessagePreview = ({
  name,
  messagePreview,
  dateSent,
  productImage,
  senderImage,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userImage}
        source={{
          uri: senderImage,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.messagePreview}>{messagePreview}</Text>
        <Text style={styles.date}>{dateSent}</Text>
      </View>

      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={require('../assets/test-images/maxey.jpg')}
        />
      </View>

      <View style={styles.icon}>
        <Ionicons name="chevron-forward-outline" size={24} color="#737373" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  userImage: {
    backgroundColor: 'pink',
    // flex: 2,
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    borderRadius: 1000,
    // marginRight: 2,
  },
  infoContainer: {
    // backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 8,
    height: '100%',
  },
  productImageContainer: {
    // backgroundColor: 'pink',
    // marginHorizontal: 2,
    flex: 3,
    height: 60,
    display: 'flex',
    alignItems: 'center',
  },
  productImage: {
    height: '100%',
    width: 60,
  },
  icon: {
    // backgroundColor: 'orange',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#a3a3a3',
  },
  userName: {
    fontWeight: '700',
    fontSize: 17,
  },
  messagePreview: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 10,
    color: '#3f3f46',
  },
});

export default MessagePreview;
