import _ from "lodash";
import React, { useCallback, useState } from "react";

function SolutionFive() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const debouncedSave = useCallback(
    _.debounce((value: string) => {
      setDisplayValue(value);
    }, 1000),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSave(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value after 1s: {displayValue}</p>
    </div>
  );
}

export default SolutionFive;
