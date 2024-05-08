import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Components/Layout';
import HomePage from './Components/Pages/Home/HomePage';
import HelpPage from './Components/Pages/Help/HelpPage';
import FoodCart from './Components/Pages/Cart/FoodCart';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="Help" element={<HelpPage />} />
            <Route path="FoodCart" element={<FoodCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
