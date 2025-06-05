function Item({ nombre, precio, img, descr }) {
  return (
    <div className="item">
      <div className="card">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{descr}</p>
        <div className="price">${precio}</div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Item;