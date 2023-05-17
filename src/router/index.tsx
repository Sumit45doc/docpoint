import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import React from 'react'

const Home = React.lazy(() => import('../components/pages/Home'))
const Hospital = React.lazy(() => import('../components/pages/Hospital'))
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
