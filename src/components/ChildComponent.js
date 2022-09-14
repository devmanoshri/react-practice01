import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>
        Call ParentCall Parent
      </button>
    </div>
  );
}

export default ChildComponent;
