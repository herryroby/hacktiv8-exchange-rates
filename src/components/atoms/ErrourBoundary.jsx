import { Flex, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    if (error) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return (
      <>
        {error ? (
          <Flex minH="100vh" py={4} px={[8, 8, 8, 12]} justifyContent="center" alignItems="center" bg="#353535">
            <Text fontFamily="Inter var, sans-serif" fontSize="1.5rem" fontWeight="500" color="#e83b46">
              Something went wrong
            </Text>
          </Flex>
        ) : (
          children
        )}
      </>
    );
  }
}

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
