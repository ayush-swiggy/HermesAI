import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputArea from './InputArea';
import ConversationArea from './ConversationArea';

import {useState} from 'react';

import GoogleConfigs from '../configs/GoogleConfigs';
import LoadingComponent from './LoadingComponent';
import Header from './Header';

const {GoogleGenerativeAI} = require('@google/generative-ai');

const apiKey = GoogleConfigs.apiKey;

function ChatScreen(props) {
  //   console.log('In chat screen: ');
  //   console.log(props);

  const [inputValue, setInputValue] = useState('');
  //   const [chats, setChats] = useState([]);
  //   const [allChats, setAllChats] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [loading, setLoading] = useState(false);

  const chats = props.chat;
  const allChats = props.allChats;
  const setChats = props.setChat;
  const setAllChats = props.setAllChats;

  async function generateAiResponse(prompt) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error generating content:', error);
      return 'Failed to load content.';
    }
  }

  const handlePress = async () => {
    if (loading) {
      console.warn('chat is loading. please wait');
      return;
    }

    if (inputValue.trim() === '') {
      console.warn('enter a text');
      return;
    }

    const userMessageId = nextId;
    const aiMessageId = nextId + 1;
    // set loading to true
    setLoading(true);
    const newChats = [
      ...chats,
      {
        chat_id: userMessageId,
        message: inputValue,
      },
    ];
    const aiResponse = await generateAiResponse(inputValue);
    setChats([
      ...newChats,
      {
        chat_id: aiMessageId,
        message: aiResponse,
      },
    ]);
    setNextId(nextId + 2);
    setInputValue('');
    // set loading to false
    setLoading(false);
  };

  const handleClearChats = () => {
    setChats([]);
  };

  const handleAllChats = () => {
    setAllChats(prevAllChats => [...prevAllChats, ...chats]);
    console.log(allChats);
    handleClearChats();
    console.warn('Chats Saved');
  };

  return (
    <View style={styles.chatContainer}>
      <Header
        onPress={handleClearChats}
        onSaveChatPress={handleAllChats}
        allChats={allChats}
        setAllChats={setAllChats}
        chats={chats}
        setChats={setChats}
      />
      <ConversationArea chats={chats} />
      {loading && <LoadingComponent isLoading={loading} />}

      <InputArea
        inputValue={inputValue}
        onChangeText={setInputValue}
        onPress={handlePress}
        isLoading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default ChatScreen;
