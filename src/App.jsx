

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function Layout() {
  const { user } = useAuth();

  // Hide header/footer for:
  // 1. Login/Signup pages (user not logged in)
  // 2. Farmers (user.role === "farmer")
  const hideHeaderFooter = !user || user.role === "farmer";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <AppRoutes />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;