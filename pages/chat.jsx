import { Box, TextField, Button } from '@skynexui/components';
import React, { useState, useEffect } from 'react';
import appConfig from '../config.json';
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import 'tailwindcss/tailwind.css';
import { createClient } from '@supabase/supabase-js';

const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQwNTQwOCwiZXhwIjoxOTU4OTgxNDA4fQ.X0W2HDhLb8mczbunBTDeDxkEY-EM3ZyaPd-ZNlyFhdc';
const SUPABASE_URL = process.env.NEXT_PUBLIC_URL || 'https://eijmsyxnibwglmhbchql.supabase.co';

const supabaseClient = createClient(SUPABASE_URL, API_KEY);

const Chat = () => {
  const [message, setMessage] = useState();
  const [messageList, setMessageList] = useState([]);

  const handleNewMessage = (newMessage) => {
    const message = {
      text: newMessage,
      from: 'user',
    }
    supabaseClient
      .from('Messages')
      .insert([message])
      .then(({ data }) => {
        setMessageList(oldState => [...oldState, data[0]]);
      })
    setMessage('');
  }

  const deleteMessage = (message) => {
    setMessageList(oldList => oldList.filter(mes => mes?.id === message?.id));
  };

  useEffect(() => {
    const supabaseMessages = supabaseClient
      .from('Messages')
      .select('*')
      .then(({ data }) => {
        setMessageList(data);
      })
      .catch((err) => {
        // console.log(err);
      })
  }, []);
  
  return (
    <Box
      className='flex items-center justify-center bg-cover bg-no-repeat bg-blend-multiply bg-[url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)]'
      style={{
        backgroundColor: appConfig.theme.colors.primary[500],
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        className='shadow-[0 2px 10px 0 rgb(0 0 0 / 20%)] flex flex-col flex-1 rounded-[5px] h-full max-w-[95%] max-h-[95vh] p-[32px]'
        style={{
          backgroundColor: appConfig.theme.colors.neutrals[700],
        }}
      >
        <Header />
        <Box
          className='relative flex flex-1 h-[80%] flex-col rounded-[5px] p-[16px]'
          style={{
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          <MessageList onDelete={deleteMessage} messages={messageList} />
          <Box
            as="form"
            className='flex items-center w-full'
            onSubmit={(e) => {
              e.preventDefault();
              handleNewMessage(message);
            }}
          >
            <TextField
              value={message}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleNewMessage(message);
                }
              }}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              className='resize-none rounded-[5px] border-0 w-full rounded-[5px] py-[6px] px-[8px]'
              style={{
                backgroundColor: appConfig.theme.colors.neutrals[800],
                color: appConfig.theme.colors.neutrals[200],
              }}
              styleSheet={{
                width: '100%',
              }}
            />
            <Button
              className="ml-[5px]"
              type="submit"
              label="OK"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}  
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
