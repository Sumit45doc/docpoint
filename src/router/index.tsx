import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Header from '../components/layout/Header/Header';
import Hospital from '../components/pages/Hospital';
import React from 'react'


const Doctor = React.lazy(() => import('../components/pages/Doctor'))
const SignIn = React.lazy(() => import('../components/pages/SignIn'))
const SignUp = React.lazy(() => import('../components/pages/SignUp'))

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={
          <React.Suspense fallback={<>Loading...</>}>
            <Home />
          </React.Suspense>
        } />
        <Route path="doctor" element={
          <React.Suspense fallback={<>Loading...</>}>
            <Doctor />
          </React.Suspense>
        } />
        <Route path="hospital" element={
          <React.Suspense fallback={<>Loading...</>}>
            <Hospital />
          </React.Suspense>
        } />

        <Route path="signin" element={
          <React.Suspense fallback={<>Loading...</>}>
            <SignIn />
          </React.Suspense>
        } />
        <Route path="signup" element={
          <React.Suspense fallback={<>Loading...</>}>
            <SignUp />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  )
}

export default Router;
