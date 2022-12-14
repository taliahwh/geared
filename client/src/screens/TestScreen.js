import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { io } from 'socket.io-client';
import { NGROK_URL } from '../api/ngrok';

const TestScreen = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState('');

  const socketRef = useRef();

  const sendMessage = () => {
    socketRef.current.emit('send_msg', {
      to: 'Server',
      from: 'Client',
      message: currentMessage,
    });
    setCurrentMessage('');
  };

  useEffect(() => {
    socketRef.current = io(NGROK_URL, { autoConnect: false });
    socketRef.current.connect();

    socketRef.current.on('welcome', (arg) => console.log(arg));
    socketRef.current.emit('client', 'Hello from the client!');

    socketRef.current.on('receive_msg', ({ message }) => {
      console.log(`From receive msg: ${message}`);
      setArrivalMessage(message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat Room</Text>
      <Text style={styles.message}>New Message: {arrivalMessage}</Text>
      <TextInput
        style={styles.textInput}
        value={currentMessage}
        onChangeText={setCurrentMessage}
        placeholder={'Say something...'}
        placeholderTextColor={'#a1a1aa'}
        maxLength={400}
        keyboardAppearance="dark"
      />
      <TouchableOpacity onPress={sendMessage}>
        <Text style={styles.btn}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 15,
  },

  textInput: {
    // flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 200,
    borderRadius: 5,
    minHeight: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '70%',
    // backgroundColor: 'transparent',
  },
  btn: {
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    padding: 5,
    marginTop: 15,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default TestScreen;
