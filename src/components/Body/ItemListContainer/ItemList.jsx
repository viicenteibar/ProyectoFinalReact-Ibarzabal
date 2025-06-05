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

function ItemList({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredItem = selectedCategory
        ? items.filter(item => item.categoria === selectedCategory)
        : items;

    return (
        <div>
            <div>
                <button onClick={() => setSelectedCategory(categories.MATES)}>
                    Mates
                </button>
                <button onClick={() => setSelectedCategory(categories.TERMO)}>
                    Termos
                </button>
                <button onClick={() => setSelectedCategory(categories.ACCESORIOS)}>
                    Accesorios
                </button>
                <button onClick={() => setSelectedCategory(categories.BOMBILLAS)}>
                    Bombillas
                </button>
                <button onClick={() => setSelectedCategory(categories.KIT)}>
                    Kit
                </button>
                <button onClick={() => setSelectedCategory("")}>
                    Todos
                </button>

            </div>
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

        </div>
    );
}

export default ItemList;