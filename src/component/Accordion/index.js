import React, { useState } from "react";
import { data } from "./utils";

const MultiSelectionAccordion = () => {
  const [selected, setSelected] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [multi, setMulti] = useState(false);

  const handleOpen = (idx) => {
    setSelected(selected === idx ? null : idx);
  };

  return (
    <div>
      {data?.map((faq) => {
        return (
          <div key={faq?.id}>
            <h1 onClick={() => handleOpen(faq?.id)}>{faq?.question}</h1>
            {selected === faq?.id && <p>{faq?.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectionAccordion;
