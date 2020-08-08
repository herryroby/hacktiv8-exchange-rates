import { Flex, Stack, Text, useColorMode } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import customTheme from '../../theme';
import Footer from '../atoms/Footer';
import Navigation from '../organisms/Navigation';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const brandColorTheme = customTheme.colors.mode[colorMode];
  return (
    <>
      <Stack minH="100vh" backgroundColor={brandColorTheme.background}>
        <Navigation />
        <Flex
          flex="1"
          py={4}
          px={[8, 8, 8, 12]}
          justifyContent="center"
          alignItems="center"
          backgroundColor={`mode.${colorMode}.background`}
        >
          {children}
        </Flex>
        <Footer>
          <Text textAlign="center">Copyright &copy; Herry Roby 2020</Text>
        </Footer>
      </Stack>
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
