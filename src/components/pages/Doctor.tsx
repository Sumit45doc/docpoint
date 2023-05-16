import { Box, Flex, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import HeroImage from '../shared/HeroImage'
import DoctorInfo from '../shared/DoctorInfo'

function Doctor() {
    const { state } = useLocation()

    return (
        <Box p={'2'}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <HeroImage imageUrl={state.imageUrl} />
                <Text fontSize={'2rem'} mt={'2'} fontWeight={'bold'} >{state.name}</Text>
            </Flex>
            <DoctorInfo info={state} />
            <br/>
            // booking schedule remaning. Comming soon
        </Box>
    )
}

export default Doctor