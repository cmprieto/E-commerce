import products from "../assets/data";

const getProducts = () => {
  const task = new Promise((resolve) => {
    // tarea
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  task.then((result) => {
    console.log(result);
  });
  return task;
};

export default getProducts;
