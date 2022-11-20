import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  const text = "Un hogar para la fotografía";

  return (
    <div>
      <ItemListContainer saludo={text} />
    </div>
  );
};

export default Home;
