import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Item({ id, nombre, precio, img, descr, stock }) {
  const { addToCart } = useCart();

  return (
    <div className="item">
      <div className="card">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{descr}</p>
        <div className="price">${precio}</div>
        <div className="button-cards">
          <Link to={`/detalleProducto/${id}`}>
            <button>Más Info</button>
          </Link>
          <button onClick={() => addToCart({ id, nombre, precio, img, descr, stock })}>
            <i className="bi bi-bag-plus-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;