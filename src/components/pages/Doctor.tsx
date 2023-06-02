import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import HeroImage from '../shared/HeroImage'
import DoctorInfo from '../shared/DoctorInfo'
import { useState } from 'react'

function Doctor() {
    const { state } = useLocation()
    const [isBooked, setIsBooked] = useState(false);

    return (
        <Box p={'2'}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <HeroImage imageUrl={state.imageUrl} />
                <Text fontSize={'2rem'} mt={'2'} fontWeight={'bold'} >{state.name}</Text>
            </Flex>
            <DoctorInfo info={state} />
            <br />
            <Box>
                <span>Slot</span>
            </Box>
            <Button onClick={() => setIsBooked(prev => !prev)}>{isBooked ? 'Appointment successful' : "Book Appointment"}</Button>
        </Box>
    )
}

export default Doctor