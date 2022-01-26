import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import {
  Box, Button, Text, TextField, Image,
} from '@skynexui/components';
import appConfig from '../config.json';
import GlobalStyle from '../components/GlobalStyle';
import Title from '../components/Title';

import style from '../components/style';

const HomePage = () => {
  const username = 'peas';

  return (
    <>
      <GlobalStyle />
      <Box 
        className={`flex items-center justify-center ${style('bg', appConfig.theme.colors.primary[500])} bg-blend-multiply m-0 container bg-cover bg-no-repeat bg-[url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)]`}
      >
        <Box
          className={`p-[32px] shadow-md m-4 flex xs:flex-column sm:flex-row items-center justify-between w-full max-w-[700px] rounded-2xl ${style('bg', appConfig.theme.colors.neutrals[700])}`}
        >
          {/* Formulário */}
          <Box
            as="form"
            className={`mb-[32px] flex flex-col items-center justify-center xs:w-full sm:w-1/2 text-center`}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text variant="body3" className={`mb-[32px] ${style('text', appConfig.theme.colors.neutrals[300])}`}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
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
            className={`flex-1 min-h-[240px] rounded-[10px] ${style('border', appConfig.theme.colors.neutrals[999])} border border-solid flex flex-col items-center max-w-[200px] p-[16px] ${style('bg', appConfig.theme.colors.neutrals[800])}]`}
          >
            <Image
              className='rounded-[50%] mb-[16px]'
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              className={`py-[3px] px-[10px] rounded-[1000px] ${style('bg', appConfig.theme.colors.neutrals[900])} ${style('text', appConfig.theme.colors.neutrals[200])}`}
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
