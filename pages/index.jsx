import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import {
  Box, Button, Text, TextField, Image,
} from '@skynexui/components';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import Title from '../components/Title';

const HomePage = () => {
  const [username, setUsername] = useState('fefranklin');
  const router = useRouter();

  return (
    <>
      <Box 
        style={{
          backgroundColor: appConfig.theme.colors.primary[500]
        }}
        className={`flex items-center justify-center bg-blend-multiply m-0 container bg-cover bg-no-repeat bg-[url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)]`}
      >
        <Box
        style={{
          backgroundColor: appConfig.theme.colors.neutrals[700]
        }}
          className={`p-[32px] shadow-md m-4 flex xs:flex-column sm:flex-row items-center justify-between w-full max-w-[700px] rounded-2xl`}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/chat');
            }}
            className={`mb-[32px] flex flex-col items-center justify-center xs:w-full sm:w-1/2 text-center`}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              className={`mb-[32px]`}
              style={{
                color: appConfig.theme.colors.neutrals[300]
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              onChange={e => setUsername(e.target.value)}
              fullWidth
              value={username? username : ''}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              disabled={username?.length <= 2}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            style={{
              backgroundColor: appConfig.theme.colors.neutrals[800],
              borderColor: appConfig.theme.colors.neutrals[999]
            }}
            className={`flex-1 min-h-[240px] rounded-[10px] border border-solid flex flex-col items-center max-w-[200px] p-[16px]`}
          >
            <Image
              className='rounded-[50%] mb-[16px]'
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              style={{
                backgroundColor: appConfig.theme.colors.neutrals[900],
                color: appConfig.theme.colors.neutrals[200]
              }}
              className={`py-[3px] px-[10px] rounded-[1000px]`}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
