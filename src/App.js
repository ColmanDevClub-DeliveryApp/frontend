import "./App.css";
import { Route, Routes } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import { RestaurantProvider } from "./components/RestaurantProvider";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ flex: "1" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/restaurants/:restaurant_name"
            element={
              <RestaurantProvider>
                <RestaurantPage />
              </RestaurantProvider>
            }
          />
          <Route
            path="/restaurants/:restaurant_name/order"
            element={
              <RestaurantProvider>
                <OrderPage />
              </RestaurantProvider>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
