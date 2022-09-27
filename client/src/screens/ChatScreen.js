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
  KeyboardAvoidingView,
} from 'react-native';
import { NGROK_URL } from '../api/ngrok';
import { io } from 'socket.io-client';
import { Ionicons } from '@expo/vector-icons';

// Styles
import theme from '../styles/styles.theme';
import styles from '../styles/ChatScreenStyles';

import ChatInput from '../components/ChatInput';
import { useSelector } from 'react-redux';

const ChatScreen = ({ navigation, route }) => {
  const ITEM_HEIGHT = 100;

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const { username, profileImage, userId } = route.params;
  const { authToken } = useSelector((state) => state.userSignIn);
  const { _id: authUserId } = useSelector((state) => state.userSignIn.userInfo);
  const { userDetails: authUserDetails } = useSelector(
    (state) => state.authUserDetails
  );

  const socketRef = useRef();
  const flatListRef = useRef();

  const navigateToMessagesHomeScreen = () => {
    navigation.navigate('Home');
  };

  const renderItem = ({ item }) => {
    return (
      <ChatInput sent={item.fromSelf} recieved={false} message={item.message} />
    );
  };

  const handleSendMessage = async () => {
    socketRef.current.emit('send_message', {
      from: authUserId,
      to: userId,
      message: currentMessage,
    });

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

    const existingMessages = [...messages];
    existingMessages.push({ fromSelf: true, message: currentMessage });
    setMessages(existingMessages);

    setCurrentMessage('');
  };

  // Get all messages between users on initial load
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
  }, []);

  // Connect to socket.io and handle how to receive messages
  useEffect(() => {
    socketRef.current = io(NGROK_URL, { autoConnect: false });
    socketRef.current.connect();

    socketRef.current.on('welcome', (arg) => console.log(arg));
    socketRef.current.emit('client', 'Hello from the client!');

    socketRef.current.on('receive_message', ({ message }) => {
      setArrivalMessage({ fromSelf: false, message });
    });

    return () => socketRef.current.disconnect();
  }, []);

  // Update screen when new message is received
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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

        <View style={styles.chatInputContainer}>
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderItem}
            keyExtractor={() => Math.floor(100000 + Math.random() * 900000)}
            initialNumToRender={15}
            onContentSizeChange={() =>
              flatListRef.current.scrollToEnd({ animating: true })
            }
            onLayout={() =>
              flatListRef.current.scrollToEnd({ animating: true })
            }
          />
        </View>

        <View style={styles.createCommentSection}>
          <Image
            style={styles.userImage}
            source={{
              uri: authUserDetails.profileImage,
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
          <TouchableOpacity onPress={handleSendMessage}>
            <Text style={styles.sendBtn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
