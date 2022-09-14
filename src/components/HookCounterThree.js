import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>useState with object</h1>
      <form>
        <div>
          <label>FirstName </label>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          ></input>
        </div>

        <div>
          <label>LatName </label>
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          ></input>
        </div>
        <div>
          <h2>FirstName: {name.firstName}</h2>
          <h2>LastName: {name.lastName}</h2>
        </div>
        {JSON.stringify(name)}
      </form>
    </div>
  );
}
