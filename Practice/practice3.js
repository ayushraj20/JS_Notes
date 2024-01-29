import React from "react";

export const ChildComponent = ({ number }) => {
  console.log("From child component");

  return (
    <div>
      <h1>Child component {number}</h1>
    </div>
  );
};

import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";

const ParentComponent = () => {
  const [localState, setLocalState] = useState(0);
  const [childComponentState, setChildComponentState] = useState(0);

  const increment = () => setLocalState(localState + 1);

  return (
    <div>
      <ChildComponent number={childComponentState} />
      <button onClick={increment}>Up</button>
      <h1>Parent component: {localState}</h1>
    </div>
  );
};

export default ParentComponent;

import { useEffect, useState } from "react";

function CountSecrets() {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });

  useEffect(() => {
    if (secret.value === "secret") {
      setSecret((s) => ({ ...s, countSecrets: s.countSecrets + 1 }));
    }
  }, [secret.value]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <input type="text" value={secret.value} onChange={(e) => onChange(e)} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
}
