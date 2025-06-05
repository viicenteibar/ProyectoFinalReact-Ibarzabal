import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { products } from '../../../data/products';
import './itemliststyle.css';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    fetchProducts.then((data) => {
      setItems(data);
    });
  }, []);

  const filteredItems = categoriaId
    ? items.filter(item => item.categoria.toLowerCase() === categoriaId.toLowerCase())
    : items;

  return (
    <div className='container'>
      <ItemList items={filteredItems} />
    </div>
  );
}

export default ItemListContainer;