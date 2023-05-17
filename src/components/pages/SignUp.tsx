import { Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { SignUp as SignUpInput, signUp } from '../../api';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';


function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { setUser } = useContext(userContext)

    const handleSignUp = (e: Event) => {
        if (!email || !password || !username) {
            alert('Enter missing credentials')
            return
        }
        e.preventDefault()
        const cred = {
            email,
            password,
            username
        }
        submitSignUp(cred)
    }

    const submitSignUp = async (cred: SignUpInput) => {
        setLoading(true)
        try {
            const { data: { result } } = await signUp(cred);
            const { _id: id, email, username } = result
            setUser({ id, username, email, role: 'user' })
            setLoading(false)
            navigate('/', { replace: true });
        } catch (error) {
            setLoading(false)
            console.log(error);
            alert('something went wrong' + error)
        }
    };

    return (
        <Card maxW={'sm'} margin={' 5rem auto'}>
            <CardHeader>
                <Heading size='md'>Sign Up</Heading>
            </CardHeader>
            <CardBody>

                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*  @ts-ignore: Unreachable code error */}
                <form onSubmit={handleSignUp}>
                    <Input value={username} type='input' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' my={'1'} />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' my={'2'} />
                    <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' my={'2'} />
                    <Button colorScheme='red' size='md' my={'1'} mr={'auto'} type='submit' >
                        {loading ? 'Loading...' : 'Submit'}
                    </Button>
                </form>
            </CardBody>
        </Card>
    )
}

export default SignUp