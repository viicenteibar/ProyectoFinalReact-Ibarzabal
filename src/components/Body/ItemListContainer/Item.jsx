function Item({ nombre, precio, img, descr }) {
  return (
    <div className="item">
      <div className="card">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{descr}</p>
        <div className="price">${precio}</div>

        <div className="button-cards">
          <button>Más Info</button>
          <button><i class="bi bi-bag-plus-fill"></i></button>
        </div>

      </div>
    </div>
  );
}

export default Item;