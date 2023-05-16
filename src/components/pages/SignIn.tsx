import { Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { SignInInput, signIn } from '../../api';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignIn = () => {
    if (!email || !password) {
      alert('Enter missing credentials')
      return
    }
    const cred = {
      email,
      password
    }
    submitSignin(cred)
  }

  const submitSignin = async (cred: SignInInput) => {
    try {
      const { data } = await signIn(cred);
      console.log(data)
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      alert('something went wrong' + error)
    }
  };

  return (
    <Card maxW={'sm'} margin={' 5rem auto'}>
      <CardHeader>
        <Heading size='md'>Sign In</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSignIn}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
          <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' my={'2'} />
          <Button colorScheme='red' size='md' my={'1'} mr={'auto'} type='submit' >
            Button
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default SignIn