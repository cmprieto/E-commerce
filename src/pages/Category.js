import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import data from "../assets/data";
import { useEffect, useState } from "react";

const Category = () => {
  const { id } = useParams();
  let filtrado;
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    filtrado = data.filter((categoria) => categoria.category === id);

    setItems2(filtrado);
    console.log(filtrado);
  }, [id]);

  return (
    <div>
      <ItemListContainer datosFiltrados={items2} />
    </div>
  );
};

export default Category;
