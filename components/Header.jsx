import { Box, Text, Button } from '@skynexui/components';
import React from 'react';

const Header = () =>{
  return (
    <>
      <Box className='w-full mb-[16px] flex items-center justify-between'>
        <Text variant='heading5'>
          Chat
        </Text>
        <Button
          variant='tertiary'
          colorVariant='neutral'
          label='Logout'
          href="/"
        />
      </Box>
    </>
  );
};

export default Header;
