import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Header from '../components/layout/Header/Header';
import Hospital from '../components/pages/Hospital';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path="hospital" element={<Hospital />} >
        </Route>
        <Route path="hospital/:id/doctors" element={<>Coming soon</>} />
      </Route>
    </Routes>
  )
}

export default Router;
