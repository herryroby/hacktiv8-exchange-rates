/* eslint-disable no-restricted-syntax */
import { Box, Flex, Stack, Text, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/atoms/Table';
import Layout from '../components/templates/Layout';
import { fetchData } from '../redux/actions';

const rate = 18159.1691;

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const { colorMode } = useColorMode();
  const { data, loading, error } = useSelector((state) => ({
    error: state.error,
    data: state.data,
    loading: state.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setExchangeRates(data.rates);
  }, [data.rates]);

  if (loading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <div>
          <span>
            ERROR:
            {error}
          </span>
        </div>
      </Layout>
    );

  return (
    <Layout>
      {exchangeRates ? (
        <Stack width="50%">
          <Table.Container variant="list">
            <Table.Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th color="#fff"> </Table.Th>
                  <Table.Th color="#fff">WE BUY</Table.Th>
                  <Table.Th color="#fff">EXCHANGE RATE</Table.Th>
                  <Table.Th color="#fff">WE SELL</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    CAD
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.CAD * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.CAD * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.CAD * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    IDR
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.IDR * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.IDR * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.IDR * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    JPY
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.JPY * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.JPY * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.JPY * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    CHF
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.CHF * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.CHF * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.CHF * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    EUR
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.EUR * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.EUR * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.EUR * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    USD
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.USD * rate * 102) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && (exchangeRates.USD * rate).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                  <Table.Td color="#fff" borderBottomColor={`mode.${colorMode}.borderBottomColor`}>
                    {exchangeRates && ((exchangeRates.USD * rate * 98) / 100).toFixed(4).toString().padStart(8, '0')}
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table.Table>
          </Table.Container>
          <Flex justifyContent="center" alignItems="center">
            <Box pt="3">
              <Text fontSize="0.8rem" color="#d7d7d7" textAlign="left">
                * base currency is IDR
              </Text>
              <Text fontSize="0.8rem" color="#d7d7d7" textAlign="left">
                * As for the API,
                <span style={{ margin: '0 3px', fontWeight: 600, textDecoration: 'underline' }}>
                  <a href="https://exchangeratesapi.io/">https://exchangeratesapi.io/</a>
                </span>
                is used.
              </Text>
            </Box>
          </Flex>
        </Stack>
      ) : (
        <Box>
          <Text>No data found</Text>
        </Box>
      )}
    </Layout>
  );
};

export default ExchangeRates;
