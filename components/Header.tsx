import { Flex, Heading, Text,Input,  Button } from '@chakra-ui/react'

const Header = () => {
  return (
    <> 
    <Flex p="2rem" direction="column" alignItems="center">
<Heading as="h1" size="4xl">
  Ma Liste de tâches
</Heading>
<Text mt='1rem' className='tasklist-slogan'>
    TaskList est un outil open source qui vous simplifie votre quotidien en toute efficacité.
</Text>

    </Flex>
     </>
  )
}

export default Header