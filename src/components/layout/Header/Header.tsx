import { Outlet, useNavigate } from 'react-router-dom'
import {
    Flex, Text, Box, Icon, Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { useContext } from 'react'
import { userContext } from '../../../context/UserProvider'

function Header() {
    const { user } = useContext(userContext)
    console.log(user)
    const navigate = useNavigate()
    const handleSignin = () => {
        navigate('/signin')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }


    return (
        <Box minHeight={'100vh'} >
            <Flex minWidth={'100vw'} p={'2'} boxShadow={'md'} fontWeight={'medium'} mb={'3'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'3xl'}>
                    DocPoint
                </Text>
                <Menu>
                    <MenuButton>
                        <Icon as={CgProfile} boxSize={7} mr={'2'} />
                    </MenuButton>
                    <MenuList>
                        {
                            !user ?
                                <>
                                    <MenuItem onClick={handleSignin}>Sign In</MenuItem>
                                    <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
                                </>
                                :
                                <>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>My Booking</MenuItem>
                                </>
                        }
                    </MenuList>
                </Menu>
            </Flex>
            <Outlet />
        </Box>
    )
}

export default Header