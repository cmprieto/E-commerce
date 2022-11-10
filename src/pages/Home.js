import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  const text = "Welcome";

  return (
    <div>
      <ItemListContainer saludo={text} />
    </div>
  );
};

export default Home;
