import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'


function App() {

  return (
    <ChakraProvider>
      <BrowserRouter basename='/'>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
