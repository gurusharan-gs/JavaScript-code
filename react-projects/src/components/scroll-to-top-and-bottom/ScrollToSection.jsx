import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const handleScrollToSection = () => {
    let pops = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pops,
      behavior: "smooth",
    });
  };

  const data = [
    {
      label: "first card",
      style: {
        with: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "second card",
      style: {
        with: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "third card",
      style: {
        with: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "fourth card",
      style: {
        with: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  return (
    <div>
      <h1>Scroll To Section</h1>
      <button onClick={handleScrollToSection}>click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 2 ? ref : null} key={index} style={item.style}>
          {item.label}{" "}
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
