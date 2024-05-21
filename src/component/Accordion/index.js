import React, { useState } from "react";
import { data } from "./utils";

const MultiSelectionAccordion = () => {
  const [enableMulti, setEnableMulti] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  const handleShow = (idx, enableMulti) => {
    if (enableMulti) {
        
    } else {
      setSelectedID(idx === selectedID ? null : idx);
    }
  };

  return (
    <div>
      <button onClick={() => setEnableMulti(true)}>
        Enable Multiple Selection
      </button>
      {data?.map((faq) => {
        return (
          <div key={faq?.id}>
            <h1 onClick={() => handleShow(faq?.id, enableMulti)}>
              {faq?.question}
            </h1>
            {selectedID === faq?.id && <p>{faq?.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectionAccordion;
