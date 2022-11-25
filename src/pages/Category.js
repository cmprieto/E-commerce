import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
//import data from "../assets/data";
import { useEffect, useState } from "react";
import { getItemsByCondition } from '../app/api';

const Category = () => {
  const { id } = useParams();
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    getItemsByCondition(id).then((datas) => setItems2(datas));    // OBTENCION DE FILTRADO DE DATOS DE FIRESTORE

    /* filtrado = data.filter((categoria) => categoria.category === id); */
    /*   setItems2(filtrado); */

  }, [id]);

  return (
    <div>
      <ItemListContainer datosFiltrados={items2} />
      {console.log('datosFiltrados', items2)}
    </div>
  );
};

export default Category;
