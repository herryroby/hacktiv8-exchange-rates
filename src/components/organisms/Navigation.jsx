import { Button, Flex, Icon, IconButton, Stack, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      py={4}
      px={[8, 8, 8, 12]}
      isInline
      justifyContent="space-between"
      backgroundColor={`mode.${colorMode}.background`}
    >
      <Link to="/">
        <Icon name="Logo" color={`mode.${colorMode}.logo`} size={10} w={32} />
      </Link>
      <Stack isInline spacing={4} display={['block', 'block', 'none']}>
        <IconButton
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
          variant="ghost"
          color={`mode.${colorMode}.text`}
          ml="2"
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          transition="all 0.2s"
        />
      </Stack>
      <Stack isInline display={['none', 'none', 'flex']}>
        <Link to="/">
          <Button variantColor="gray" variant="ghost" mx="auto" color={`mode.${colorMode}.text`}>
            Exchange Rates
          </Button>
        </Link>
        <IconButton
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
          variant="ghost"
          color={`mode.${colorMode}.text`}
          ml="2"
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          transition="all 0.2s"
        />
      </Stack>
    </Flex>
  );
};

export default Navigation;
