import React from "react";

// function Greet() {
//   return <h1>Hello Manoshri</h1>;
// }
const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello, {name} aka {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
export default Greet;
