import * as React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import App from './App'  // Import du composant principal
import Navbar from './Navbar'
import Footer from './Footer'
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root')
const root = createRoot(container!) // Crée une racine React

root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* Utilisation de Flex pour organiser la page */}
      <Flex direction="column" minHeight="100vh">
        {/* Navbar toujours en haut */}
        <Navbar />
        
        {/* Contenu principal qui occupe tout l'espace disponible */}
        <Box flex="1">
          <App />  {/* Votre contenu principal */}
        </Box>

        {/* Footer collé en bas */}
        <Footer />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
)
