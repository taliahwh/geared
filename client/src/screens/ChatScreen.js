import geared from '../api/geared';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import { NGROK_URL } from '../api/ngrok';
import { io } from 'socket.io-client';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/ChatScreenStyles';

import ChatInput from '../components/ChatInput';
import { useSelector } from 'react-redux';

const ChatScreen = ({ navigation, route }) => {
  // const minCommentInputContainerHeight = Dimensions.get('window').height * 0.06;
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const { username, profileImage, userId } = route.params;
  const { authToken } = useSelector((state) => state.userSignIn);
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);

  // const socket = io(NGROK_URL);

  const navigateToMessagesHomeScreen = () => {
    navigation.navigate('Home');
  };

  const renderItem = ({ item }) => {
    // console.log(item);
    return (
      <ChatInput
        sent={item.fromSelf}
        recieved={item.fromSelf ? false : true}
        message={item.message}
      />
    );
  };

  const handleSubmitComment = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    await geared.post(
      '/api/messages/send-message',
      { from: authUserId, to: userId, message: currentMessage },
      config
    );
    console.log(currentMessage);

    // socket.emit('send_message', currentMessage);
    // setMessages(currentMessage);

    setCurrentMessage('');
  };

  useEffect(() => {
    const getMessages = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };
      const { data } = await geared.get(`/api/messages/${userId}`, config);
      setMessages(data);
    };
    getMessages().catch(console.error);

    // socket.on('receive_message', (messageData) => {
    //   // setMessages(messageData);
    //   console.log(`Received message: ${messageData}`);
    // });

    // return () => socket.disconnect();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAwareScrollView extraHeight={minCommentInputContainerHeight}> */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={navigateToMessagesHomeScreen}
          activeOpacity={1}
        >
          <Ionicons
            name="chevron-back-outline"
            size={28}
            color={theme.LIGHT_GRAY}
          />
        </TouchableOpacity>
        <View style={styles.userImageAndPhotoContainer}>
          <Image
            style={styles.userImage}
            source={{
              uri: profileImage,
            }}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
        <Ionicons name="chevron-back-outline" size={28} color="transparent" />
      </View>

      <View style={styles.createCommentSection}>
        <Image
          style={styles.userImage}
          source={{
            uri: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
          }}
        />

        <TextInput
          style={styles.textInput}
          value={currentMessage}
          onChangeText={(text) => setCurrentMessage(text)}
          placeholder={'Say something...'}
          placeholderTextColor={'#a1a1aa'}
          maxLength={400}
          multiline
          keyboardAppearance="dark"
        />
        <TouchableOpacity onPress={handleSubmitComment}>
          <Text style={styles.sendBtn}>SEND</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatInputContainer}>
        <Text style={styles.date}>11:35 AM</Text>
        {/* <ChatInput recieved message={'How about 150?'} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} />
          <ChatInput sent message={'Can you do 135?'} />
          <ChatInput sent message={`It's brand new`} /> */}
        <FlatList
          // ref={scrollRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={() => Math.floor(100000 + Math.random() * 900000)}
        />
      </View>

      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default ChatScreen;
