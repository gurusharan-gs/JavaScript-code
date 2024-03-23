import React, { useEffect, useState } from "react";
import Profile from "./Profile";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchApiData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/recipes`);
      const data = await response.json();
      setData(data?.recipes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>no data...</h1>;
  }

  console.log(data);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {data.map((item) => (
        <Profile key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
