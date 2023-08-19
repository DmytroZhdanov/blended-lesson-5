import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Rates from "./pages/Rates";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatch(
        baseCurrencyThunk({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      )
    );
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
