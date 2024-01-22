'use client';

import { Box, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '@/Components/Footer';
import Sidebar from '@/Components/Sidebar';
import Header from '@/Components/Header';
import HomeScreen from '@/Pages/HomeScreen';

export default function Home() {
  const [showSide, setShowSide] = useState<boolean>(false);
  return (
    <Flex justify="center">
      <Flex justify="center">
        <Grid position="relative">
          <Box maxW={{ base: 'full', lg: '1300px' }}>
            <Sidebar showSide={showSide} setShowSide={setShowSide} />
            <Header showSide={showSide} setShowSide={setShowSide} />
            <Box as="main" minH={'90vh'}>
              <HomeScreen />
            </Box>
            <Footer />
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}
