import { Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { SignUp as SignUpInput, signIn, signUp } from '../../api';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignUp = () => {
        if (!email || !password || !username) {
            alert('Enter missing credentials')
            return
        }
        const cred = {
            email,
            password,
            username
        }
        submitSignUp(cred)
    }

    const submitSignUp = async (cred: SignUpInput) => {
        try {
            const { data } = await signUp(cred);
            console.log(data)
            // navigate('/', { replace: true });
        } catch (error) {
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
                <form onSubmit={handleSignUp}>
                    <Input value={username} type='input' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' my={'1'} />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' my={'2'} />
                    <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' my={'2'} />
                    <Button colorScheme='red' size='md' my={'1'} mr={'auto'} type='submit' >
                        Button
                    </Button>
                </form>
            </CardBody>
        </Card>
    )
}

export default SignUp