import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const cantidadEnCarrito = cart.filter((p) => p.id === item.id).length;
    if (cantidadEnCarrito >= item.stock) {
      toast.error(`No hay más stock disponible de ${item.nombre}`, {
        position: "top-right",
        autoClose: 2000,
        style: {
          background: "#fff", // fondo blanco
          color: "#e63946",   // texto rojo
          border: "2px solid #e63946", // borde rojo
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(69,123,157,0.10)"
        },
        icon: "❌"
      });
      return;
    }

    setCart((prev) => [...prev, item]);
    toast.success(`${item.nombre} agregado al carrito`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#fff", // fondo blanco
        color: "#457b9d",   // texto azul
        border: "2px solid #457b9d", // borde azul
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(69,123,157,0.10)"
      },
      icon: "🛒"
    });
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}