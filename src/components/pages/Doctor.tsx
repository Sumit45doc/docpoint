import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import HeroImage from '../shared/HeroImage'
import DoctorInfo from '../shared/DoctorInfo'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

function Doctor() {
    const { state } = useLocation()
    const [isBooked, setIsBooked] = useState(false);
    const toast = useToast()
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = () => {
        setIsBooked(prev => !prev)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (!isBooked) {
                toast({
                    description: "Appointment Booking Successful",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
            } else {
                toast({
                    description: "Appointment Cancelled",
                    status: 'info',
                    duration: 4000,
                    isClosable: true,
                })
            }
        }, 1000)
    }

    return (
        <Box p={'2'}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <HeroImage imageUrl={state.imageUrl} />
                <Text fontSize={'2rem'} mt={'2'} fontWeight={'bold'} >{state.name}</Text>
            </Flex>
            <DoctorInfo info={state} />
            <br />
            <Box display={'flex'} justifyContent={'flex-end'} mr={'24'}>
                <Button size={'lg'} isLoading={isLoading} color={'Highlight'} boxShadow={'base'} onClick={handleSubmit}>{isBooked ? 'Cancel Appointment' : "Book Appointment"}</Button>
            </Box>
        </Box>
    )
}

export default Doctor