import React, { useState, Fragment } from 'react';
// 'npm install uuid', si hay problemas 'npm i --save-dev @types/uuid'
import { v4 as uuidv4 } from "uuid";


const initialList = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dennis",
  },
];

const MakingList = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  function handleChange(event: any) {
    setName(event.target.value);
  }

const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);
    setName("");
  }
 

  return (
    <Fragment>
      <h1>MakingList</h1>

      <div>
        <input title="title" type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={() => handleAdd()}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <>
            <li key={item.id}>
              {item.name} 
            </li>
          </>
        ))}
      </ul>
    </Fragment>
  );
}

export default MakingList