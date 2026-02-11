import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cart, setCart] = useState({ items: [] });
  const GUEST_KEY = "guest_cart";

  useEffect(() => {
    if (user) {
      // If user has just logged in, try merging guest cart automatically
      const guest = JSON.parse(localStorage.getItem(GUEST_KEY)) || [];
      if (guest.length > 0) {
        mergeGuestCart(guest).finally(() => {
          localStorage.removeItem(GUEST_KEY);
          fetchCart();
        });
      } else {
        fetchCart();
      }
    } else {
      // guest: load from localStorage
      const saved = JSON.parse(localStorage.getItem(GUEST_KEY)) || [];
      setCart({ items: saved });
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const { data } = await api.get("/cart", { headers: { Authorization: `Bearer ${token}` } });
      setCart(data);
    } catch (err) {
      console.error("fetchCart err", err.response?.data || err.message);
      setCart({ items: [] });
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!user) {
      // guest flow: save minimal product info (productId + qty)
      const existing = cart.items.find(i => i.product._id === productId || i.product === productId);
      let next;
      if (existing) {
        next = cart.items.map(i => {
          if (i.product._id === productId || i.product === productId) return { ...i, quantity: i.quantity + quantity };
          return i;
        });
      } else {
        // We only have productId for guest; to display nice info you may fetch product details later
        next = [...cart.items, { product: { _id: productId }, quantity }];
      }
      setCart({ items: next });
      localStorage.setItem(GUEST_KEY, JSON.stringify(next));
      return;
    }

    try {
      const { data } = await api.post("/cart/add", { productId, quantity }, { headers: { Authorization: `Bearer ${token}` } });
      setCart(data);
    } catch (err) {
      console.error("addToCart err", err.response?.data || err.message);
      throw err;
    }
  };

  const removeFromCart = async (productId) => {
    if (!user) {
      const next = cart.items.filter(i => !(i.product._id === productId || i.product === productId));
      setCart({ items: next });
      localStorage.setItem(GUEST_KEY, JSON.stringify(next));
      return;
    }
    try {
      const { data } = await api.post("/cart/remove", { productId }, { headers: { Authorization: `Bearer ${token}` }});
      setCart(data);
    } catch (err) {
      console.error("removeFromCart err", err.response?.data || err.message);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (!user) {
      const next = cart.items.map(i => (i.product._id === productId || i.product === productId) ? { ...i, quantity } : i);
      setCart({ items: next });
      localStorage.setItem(GUEST_KEY, JSON.stringify(next));
      return;
    }
    try {
      const { data } = await api.post("/cart/update", { productId, quantity }, { headers: { Authorization: `Bearer ${token}` }});
      setCart(data);
    } catch (err) {
      console.error("updateQuantity err", err.response?.data || err.message);
    }
  };

  const mergeGuestCart = async (guestItems) => {
    // guestItems expected: [{ product: { _id }, quantity}] or [{productId, quantity}]
    // normalize to [{productId, quantity}]
    const items = guestItems.map(i => {
      return { productId: i.product?._id || i.productId, quantity: i.quantity || 1 };
    }).filter(i => i.productId);
    if (items.length === 0) return;
    try {
      const { data } = await api.post("/cart/merge", { items }, { headers: { Authorization: `Bearer ${token}` }});
      setCart(data);
    } catch (err) {
      console.error("mergeGuestCart err", err.response?.data || err.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
