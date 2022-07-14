import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let status = true;
    setTimeout(() => {
      if (status) setColor("green");
    }, 3000);

    return () => {
      status = false;
    };
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
