import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import Rates from './pages/Rates';
import { useEffect } from 'react';
import { setBaseCurrency } from './redux/slice';

import { useDispatch } from 'react-redux';
import { baseCurrencyThunk } from './redux/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const success = (position) => {
      const crd = position.coords;
      dispatch(baseCurrencyThunk(crd));
    };

    const error = (error) => {
      dispatch(setBaseCurrency('USD'));
      console.warn(error.message);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Route>
    </Routes>
  );
}

export default App;
