import React, { useState } from "react";
import Item from "./Item";
import "./itemliststyle.css";

const categories = {
    MATES: "Mates",
    TERMO: "Termos",
    ACCESORIOS: "Accesorios",
    BOMBILLAS: "Bombillas",
    KIT: "Kit",
};

function ItemList({ items, selectedCategory }) {

    const filteredItem = selectedCategory
        ? items.filter(item => item.categoria === selectedCategory)
        : items;

    return (
            <div className="product-grid">
                {filteredItem.map(item => (
                <Item
                    key={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    img={item.img}
                    descr={item.descripcion}
                />
            ))}
            </div>
    );
}

export default ItemList;