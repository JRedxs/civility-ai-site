import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';  // Votre composant principal
import AboutUs from './AboutUs';  // Import du composant About Us
import Navbar from './Navbar';
import Footer from './Footer';

const container = document.getElementById('root');
const root = createRoot(container!); // Crée une racine React

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        {/* Utilisation de Flex pour organiser la page */}
        <Flex direction="column" minHeight="100vh">
          <Navbar />
          
          <Box flex="1">
            {/* Routes de l'application */}
            <Routes>
              <Route path="/" element={<App />} />  
              <Route path="/about" element={<AboutUs />} />  {/* La page About Us */}
            </Routes>
          </Box>
          
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
