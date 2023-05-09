import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Header from '../components/layout/Header/Header';
import Hospital from '../components/pages/Hospital';
import Doctor from '../components/pages/Doctor';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="hospital" element={<Hospital />} />
      </Route>
    </Routes>
  )
}

export default Router;
