import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../data/products";
import './pagesstyle.css';
import { useCart } from "../../context/CartContext";

function DetalleProducto() {
  const { detalleProductoId } = useParams();
  const producto = products.find(item => item.id === Number(detalleProductoId));
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return <div className="mensaje-error">Producto no encontrado</div>;

  const handleChange = (e) => {
    const value = Math.max(1, Math.min(producto.stock, Number(e.target.value)));
    setCantidad(value);
  };

  const handleAdd = () => {
    for (let i = 0; i < cantidad; i++) {
      addToCart(producto);
    }
  };

  return (
    <div className="detalle-producto">
      <div className="columna-imagen">
        <img src={producto.img} alt={producto.nombre} className="detalle-imagen" />
      </div>
      <div className="columna-info">
        <h2 className="detalle-nombre">{producto.nombre}</h2>
        <p className="detalle-descripcion">{producto.descripcion}</p>
        <p className="detalle-stock">Stock: {producto.stock}</p>
        <p className="detalle-precio">Precio: ${producto.precio}</p>
        {producto.stock > 0 ? (
          <>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
              <button onClick={() => setCantidad(c => Math.max(1, c - 1))} style={{padding: "4px 10px"}}>-</button>
              <input
                type="number"
                min={1}
                max={producto.stock}
                value={cantidad}
                onChange={handleChange}
                style={{ width: 50, textAlign: "center", margin: "0 8px" }}
              />
              <button onClick={() => setCantidad(c => Math.min(producto.stock, c + 1))} style={{padding: "4px 10px"}}>+</button>
            </div>
            <button className="boton-comprar" onClick={handleAdd}>Agregar al carrito</button>
          </>
        ) : (
          <p className="detalle-agotado">Producto sin stock</p>
        )}
      </div>
    </div>
  );
}

export default DetalleProducto;
