import ItemListContainer from "../components/ItemListContainer";


const Home = () => {
  const text = "Fotografías y fotolibros";

  return (
    <div>
      <ItemListContainer saludo={text} />
    </div>
  );
};

export default Home;
