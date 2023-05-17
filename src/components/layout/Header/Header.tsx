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
    const { user, setUser } = useContext(userContext)

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
                <Menu >
                    <MenuButton mr={'2'} >
                        {user && <Box as={'span'}> Hi, {user.username}</Box>}  <Icon as={CgProfile} boxSize={7} mr={'2'} />
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
                                    <MenuItem onClick={() => setUser(null)}>Log out</MenuItem>
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