import { useParams } from "react-router-dom";
import { products } from "../../../data/products";

function DetalleProducto() {
  const { detalleProductoId } = useParams();
  const producto = products.find(item => item.id === Number(detalleProductoId));

  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <div>Precio: ${producto.precio}</div>
      <div>Stock: {producto.stock}</div>
    </div>
  );
}

export default DetalleProducto;