import React, { useEffect, useRef, useState } from "react";

const ScrollToTopAndBottom = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const bottomRef = useRef(null);

  const handleScrollOnTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollOnBottom = () => {
    //     bottomRef.current.ScrollIntoView({ behavior: "smooth" });
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();
      if (data) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if (err) {
    return <h1>Something want wrong...</h1>;
  }

  console.log(data.products);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <button onClick={handleScrollOnBottom}>scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item, i) => <li key={i}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollOnTop}>scroll to top</button>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ScrollToTopAndBottom;
