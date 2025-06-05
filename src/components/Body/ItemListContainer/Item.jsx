import {Link} from 'react-router-dom';

function Item({ id, nombre, precio, img, descr }) {
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
          <button><i className="bi bi-bag-plus-fill"></i></button>
        </div>

      </div>
    </div>
  );
}

export default Item;