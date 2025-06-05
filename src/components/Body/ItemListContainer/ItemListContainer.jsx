import { useEffect,useState } from 'react';
import ItemList from './ItemList';

import { products } from '../../../data/products';
import './itemliststyle.css';

import React from 'react'

function ItemListContainer() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    fetchProducts.then((data) => {
      setItems(data);
    })
  }, []);

  return (

    <div className='container'>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer;