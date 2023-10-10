import React, { useState } from "react";
import Contextbook from "./contextbook";

const Statebook = (props) => {
  const allbooks = [
    {
      _id: "651cd6a15fd46798a6203ae6",
      user: "651cba8bc3da616000b71b83",
      field: "polscience",
      genre: "marxism",
      __v: 0,
    },
    {
      _id: "652003e555328852d4404a07",
      user: "651cba8bc3da616000b71b83",
      field: "polscience",
      genre: "commuism",
      __v: 0,
    },
    {
      _id: "652003ef55328852d4404a09",
      user: "651cba8bc3da616000b71b83",
      field: "polscience",
      genre: "democracy",
      __v: 0,
    },
    {
      _id: "652003f955328852d4404a0b",
      user: "651cba8bc3da616000b71b83",
      field: "polscience",
      genre: "dictatorship",
      __v: 0,
    }
  ];
  const [ book, setBook] = useState(allbooks);

  return (
    <Contextbook.Provider value={{book,setBook}}>
      {props.children}
    </Contextbook.Provider>
  );
};
export default Statebook;
