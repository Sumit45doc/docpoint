import { Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { SignInInput, signIn } from '../../api';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserProvider';


function SignIn() {
  const { setUser } = useContext(userContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSignIn = (e: Event) => {
    if (!email || !password) {
      alert('Enter missing credentials')
      return
    }
    e.preventDefault()
    const cred = {
      email,
      password
    }
    submitSignin(cred)
  }

  const submitSignin = async (cred: SignInInput) => {
    setLoading(true)
    try {
      const { data: { result } } = await signIn(cred)
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
        <Heading size='md'>Sign In</Heading>
      </CardHeader>
      <CardBody>

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*  @ts-ignore: Unreachable code error */}
        <form onSubmit={(e: Event) => handleSignIn(e)} >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
          <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' my={'2'} />
          <Button colorScheme='red' size='md' my={'1'} mr={'auto'} type='submit'>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default SignIn