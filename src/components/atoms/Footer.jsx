import { Box, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Footer = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Box w="100%" p="5" bg={`mode.${colorMode}.background`} color={`mode.${colorMode}.text`}>
      {children}
    </Box>
  );
};

Footer.propTypes = propTypes;

export default Footer;
