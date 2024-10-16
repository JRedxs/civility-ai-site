import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,  // Import de Image
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { ReactElement } from 'react'
  
  interface CardProps {
    heading: string
    description: string
    imageSrc: string  
    href: string
  }
  
  const Card = ({ heading, description, imageSrc, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            >
            {/* Remplacement de l'icône par l'image */}
            <Image src={imageSrc} alt={heading} boxSize="100%" objectFit="cover" borderRadius="full" /></Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    )
  }

  export default function gridListWith() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} marginTop="30px"
          fontFamily="'Poppins', sans-serif">
            Our Team
          </Heading>
          <Text color={'#40BFBC'} fontSize={{ base: 'sm', sm: 'lg' }} fontFamily="'Poppins', sans-serif">
          We are dedicated to transforming social networks into safer spaces by 
          harnessing the power of advanced AI-driven user authentication and automatic content moderation. 
          With our innovative solutions, we detect and mitigate harmful and hateful content in real time, 
          fostering respectful and inclusive online communities.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center" fontFamily="'Poppins', sans-serif">
            <Card
              heading={'Enzo Vandevelde'}
              imageSrc={'./img/Enzo.png'}  // Chemin vers l'image
              description={'Founder'}
              href={'#'}
            />
            <Card
              heading={'Paul Boutillier'}
              imageSrc={'./img/Polo.png'}  // Chemin vers l'image
              description={'Founder'}
              href={'#'}
            />
            <Card
              heading={'Rémi Ryckebusch'}
              imageSrc={'./img/Remi.png'}  // Chemin vers l'image
              description={'Founder'}
              href={'#'}
            />
            <Card
              heading={'Rémy Lemaire'}
              imageSrc={'./img/Remy.png'}  // Chemin vers l'image
              description={'Founder'}
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    )
  }
  