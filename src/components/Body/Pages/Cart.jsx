import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './pagesstyle.css';

function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="carrito-vacio">El carrito está vacío.</div>;
  }

  // Agrupar productos y contar cantidad
  const grouped = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].cantidad += 1;
    } else {
      acc[item.id] = { ...item, cantidad: 1 };
    }
    return acc;
  }, {});

  const productos = Object.values(grouped);

  // Sumar una unidad
  const addOne = (item) => setCart(prev => [...prev, item]);

  // Restar una unidad
  const removeOne = (id) => {
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  };

  // Eliminar todas las unidades de un producto
  const removeAll = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Vaciar todo el carrito
  const clearCart = () => setCart([]);

  return (
    <div className="carrito-detalle">
      <h2>Tu carrito</h2>
      <ul>
        {productos.map((item) => (
          <li key={item.id} style={{alignItems: "center"}}>
            <img src={item.img} alt={item.nombre} width={50} />
            <span>{item.nombre}</span>
            <button
              onClick={() => removeOne(item.id)}
              style={{
                margin: "0 8px",
                fontSize: "1.2rem",
                padding: "2px 8px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                background: "#fff",
                cursor: "pointer"
              }}
            >&#8592;</button>
            <span style={{ minWidth: 32, display: "inline-block", textAlign: "center" }}>{item.cantidad}</span>
            <button
              onClick={() => addOne(item)}
              disabled={item.cantidad >= item.stock}
              style={{
                margin: "0 8px",
                fontSize: "1.2rem",
                padding: "2px 8px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                background: "#fff",
                cursor: "pointer"
              }}
            >&#8594;</button>
            <span style={{ marginLeft: 16 }}>${item.precio * item.cantidad}</span>
            <button
              onClick={() => removeAll(item.id)}
              style={{
                marginLeft: 16,
                fontSize: "1.2rem",
                color: "#e63946",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              title="Eliminar producto"
            >✖</button>
          </li>
        ))}
      </ul>
      <div className="carrito-total">
        Total: ${productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
      </div>
      <div style={{display: "flex", gap: 16, marginTop: 16}}>
        <button onClick={clearCart} style={{background: "#e63946", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer"}}>Vaciar carrito</button>
        <button
          onClick={() => navigate('/checkout')}
          style={{background: "#457b9d", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer"}}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default Cart;