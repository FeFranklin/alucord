import { Box, Text, Image, Button } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';

const MessageList = ({ messages, onDelete }) => {
  const backgroundColorHover = `hover:bg-[${appConfig.theme.colors.neutrals[700]}]`;
  return (
    <Box
      tag="ul"
      className='flex flex-col flex-1 overflow-y-auto mb-[16px]'
      styles={{
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      {messages.map(mes => (
        <Text
        key={mes.id}
        tag="li"
        className={`rounded-[5px] p-[6px] mb-[12px] ${backgroundColorHover}`}
        styleSheet={{
          hover: {
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }
        }}
        >
          <Box className='mb-[8px] flex flex-row items-baseline'>
            <Image
              className='w-[20px] h-[20px] rounded-[50%] inline-block mr-[8px]'
              src={`https://github.com/${mes.from}.png`}
            />
            <Text className="text-base" tag="strong">{mes.from}</Text>
            <Text
              className='ml-[8px] text-sm'
              styles={{
                color: appConfig.theme.colors.neutrals[300],              
              }}
              tag="span"
            >
              {(new Date().toLocaleDateString())}
            </Text>
            <Button
              type="button"
              onClick={() => {
                onDelete(mes.id);
              }}
              label="Delete"
              size="sm"
              className="ml-auto"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
        {mes.text}
        </Text>
      ))}
    </Box>
  )
};

export default MessageList;
