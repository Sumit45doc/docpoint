import { Outlet } from 'react-router-dom'
import { Flex, Text, Box } from '@chakra-ui/react'

function Header() {
    return (
        <Box minHeight={'100vh'} >
            <Flex minWidth={'100vw'} p={'2'} boxShadow={'md'} fontWeight={'medium'} mb={'3'}>
                <Text fontSize={'3xl'}>
                    DocPoint
                </Text>
            </Flex>
            <Outlet />
        </Box>
    )
}

export default Header