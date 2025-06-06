import { useParams } from "react-router-dom";
import { products } from "../../../data/products";
import './pagesstyle.css';

function DetalleProducto() {
  const { detalleProductoId } = useParams();
  const producto = products.find(item => item.id === Number(detalleProductoId));

  if (!producto) return <div className="mensaje-error">Producto no encontrado</div>;

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
          <button className="boton-comprar">Agregar al carrito</button>
        ) : (
          <p className="detalle-agotado">Producto sin stock</p>
        )}
      </div>
    </div>
  );
}

export default DetalleProducto;
