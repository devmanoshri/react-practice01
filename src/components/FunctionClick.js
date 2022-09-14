import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("i am function click handler");
  }
  return (
    <div>
      <button onClick={clickHandler}> Function Click</button>
    </div>
  );
}

export default FunctionClick;
