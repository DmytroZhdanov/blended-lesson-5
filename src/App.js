import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Rates from "./pages/Rates";

function App() {
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
