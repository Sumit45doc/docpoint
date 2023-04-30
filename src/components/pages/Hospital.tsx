import { Text, Image, Flex, Heading, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import DoctorCards from '../shared/DoctorCards'

function Hospital() {
  const { state } = useLocation()

  return (
    <Box p={'2'}>
      <Flex justifyContent={'center'}>
        {state?.image && <Image
          src={state?.image}
          maxW={['auto', 'auto', 'auto','3xl']}
          objectFit={'cover'}
          borderRadius='lg'
          fallbackSrc={'https://via.placeholder.com/500'}
        />}
      </Flex>
      {state?.description && <Box my={'3'}>
        <Heading size={'md'}>
          Description
        </Heading>
        <Text>{state?.description}</Text>
      </Box>}
      <DoctorCards/>
    </Box>
  )
}

export default Hospital