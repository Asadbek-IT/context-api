import React, { useEffect, useState } from "react";
import { Context } from "./context/Context";
import Users from "./components/Users";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json()).then((data) => {setData(data?.products);});
  }, []);

  return (
    <div>
      <Context.Provider value={data}>
        <Users />
      </Context.Provider>
    </div>
  );
};

export default App;