import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import MessagePreview from '../components/MessagePreview';

const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Chat', {
            id: 22,
          });
        }}
      >
        <MessagePreview
          name="Dennis Rodman"
          messagePreview={'Is this card still available?'}
          dateSent={'2 WEEKS AGO'}
          // productImage={'https://i.pinimg.com/originals/d8/aa/8f/d8aa8f6987714957e06ce0fb416641ef.jpg'}
          senderImage={
            'https://i.pinimg.com/originals/d8/aa/8f/d8aa8f6987714957e06ce0fb416641ef.jpg'
          }
        />
      </TouchableOpacity>

      <MessagePreview
        name="Rasheed Wallace"
        messagePreview={'Will you take $250 instead?'}
        dateSent={'5 HOURS AGO'}
        // productImage={'https://i.pinimg.com/originals/d8/aa/8f/d8aa8f6987714957e06ce0fb416641ef.jpg'}
        senderImage={
          'https://cdn-wp.thesportsrush.com/2022/04/e44aae51-untitled-design-1.jpg'
        }
      />
      <MessagePreview
        name="C Webb"
        messagePreview={'Open 2 trade?'}
        dateSent={'YESTERDAY'}
        // productImage={'https://i.pinimg.com/originals/d8/aa/8f/d8aa8f6987714957e06ce0fb416641ef.jpg'}
        senderImage={
          'https://www.gannett-cdn.com/presto/2021/05/16/PDTF/ea67f359-089b-48a2-a9a2-8053a53b5969-dfpm27031.jpg?crop=1409,792,x430,y146&width=660&height=372&format=pjpg&auto=webp'
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '500',
  },
});

export default MessagesScreen;
