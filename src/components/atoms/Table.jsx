import { Box, PseudoBox } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const BOX_SHADOW = '0 1px 5px 0 rgba(0, 0, 0, 0.1)';

const ContainerPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  variant: PropTypes.string.isRequired,
};

export const Container = ({ children, variant = 'default', ...rest }) => (
  <Box
    display="block"
    w="100%"
    overflowX="auto"
    borderRadius={4}
    border={variant === 'list' ? 'none' : '1px'}
    boxShadow={variant === 'list' ? 'none' : BOX_SHADOW}
    borderColor="gray.200"
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = ContainerPropTypes;

const TablePropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Table = ({ children, ...rest }) => (
  <Box as="table" w="100%" table-layout="auto" border-collapse="collapse" {...rest}>
    {children}
  </Box>
);

Table.propTypes = TablePropTypes;

const TheadPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Thead = ({ children, ...rest }) => (
  <Box as="thead" p={4} textAlign="center" {...rest}>
    {children}
  </Box>
);

Thead.propTypes = TheadPropTypes;

const TbodyPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Tbody = ({ children, ...rest }) => (
  <Box as="tbody" p={4} {...rest}>
    {children}
  </Box>
);

Tbody.propTypes = TbodyPropTypes;

const TfootPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Tfoot = ({ children, ...rest }) => (
  <Box as="tfoot" p={4} {...rest}>
    {children}
  </Box>
);

Tfoot.propTypes = TfootPropTypes;

const TrPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Tr = ({ children, ...rest }) => (
  <PseudoBox as="tr" my={1} {...rest}>
    {children}
  </PseudoBox>
);

Tr.propTypes = TrPropTypes;

const ThPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Th = ({ children, ...rest }) => (
  <PseudoBox as="th" p={4} textAlign="center" borderBottom="1px" borderBottomColor="gray.200" {...rest}>
    {children}
  </PseudoBox>
);

Th.propTypes = ThPropTypes;

const TdPropTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const Td = ({ children, ...rest }) => (
  <PseudoBox as="td" p={4} textAlign="center" borderBottom="1px" borderBottomColor="gray.200" {...rest}>
    {children}
  </PseudoBox>
);

Td.propTypes = TdPropTypes;

export default {
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
};
