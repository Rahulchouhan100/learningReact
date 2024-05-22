import React, { useState } from "react";
import { data } from "./utils";

const MultiSelectionAccordion = () => {
  const [enableMulti, setEnableMulti] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [multiple, setMultiple] = useState([]);

  const handleShow = (idx, enableMulti) => {
    if (enableMulti) {
      // whenever we are clicking particular item so we have to
      //   store in the array like setmultiple[]
      // until or unless when we click on same item again then we have to remove it. from the array
      let copyMultiple = [...multiple];
      // now we have to check idx is present in the multiple[] or note
      // if this id is present then we have alreay clicked on that item.
      const findIndexOfCurrentID = copyMultiple.indexOf(idx);
      console.log(findIndexOfCurrentID);
      //   this findIndexOfCurrentID is not present in the array and it will return -1.
      if (findIndexOfCurrentID === -1) {
        copyMultiple.push(idx);
      } else {
        // it will find the same and delete it
        copyMultiple.splice(findIndexOfCurrentID, 1);
      }
      setMultiple(copyMultiple);
    } else {
      setSelectedID(idx === selectedID ? null : idx);
    }
  };

  console.log(multiple);

  return (
    <div>
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable Multiple Selection
      </button>
      {data?.map((faq) => {
        return (
          <div key={faq?.id}>
            <h1 onClick={() => handleShow(faq?.id, enableMulti)}>
              {faq?.question}
            </h1>
            {/* {selectedID === faq?.id   && <p>{faq?.answer}</p>} */}
            {enableMulti
              ? multiple.indexOf(faq?.id) !== -1 && <p>{faq?.answer}</p>
              : selectedID === faq?.id && <p>{faq?.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectionAccordion;
