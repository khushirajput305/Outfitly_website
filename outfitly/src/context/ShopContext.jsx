import React, { createContext, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {products} from '../assets/assets'

export const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token , setToken] = useState('')
  const navigate = useNavigate();

  // Add to cart logic
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a product size");
      return;
    }

    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (!cartData[itemId]) cartData[itemId] = {};
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }

      return cartData;
    });
  };

  // Get total item count in cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalCount += quantity;
        }
      }
    }
    return totalCount;
  };

  // Update quantity of a product
  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (!cartData[itemId]) cartData[itemId] = {};

      if (quantity <= 0) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size] = quantity;
      }

      return cartData;
    });
  };

  // Calculate total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;

    if (!Array.isArray(products)) return totalAmount;

    for (const productId in cartItems) {
      const itemInfo = products.find((product) => product._id === productId);
      if (!itemInfo) continue;

      const sizes = cartItems[productId];
      for (const size in sizes) {
        const quantity = sizes[size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };



    
   
 

  const value = useMemo(
    () => ({
      products,
      currency,
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
      loading,
      error,
      setToken
      
    }),
    [search, showSearch, cartItems, products, loading, error,token]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
