import { Box } from '@skynexui/components';
import ReactLoading from 'react-loading';
import appConfig from '../config.json';
import React from 'react';

const Loading = () => {

  return (
    <Box
      tag="ul"
      className='flex flex-col flex-1 overflow-y-auto mb-[16px] items-center justify-center'
    >
      <ReactLoading type="spin" color={appConfig.theme.colors.primary[500]} />
    </Box>
  );
};

export default Loading;
