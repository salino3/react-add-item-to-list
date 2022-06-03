import { useEffect, useState, Fragment } from "react";

const Counter = () => {

 let initial = 0;

  const [counter, setcounter] = useState(initial );
  const [counter2, setcounter2] = useState(initial );
// useEffect conectado a 'counter'
  useEffect(() => {

    if (counter > 9 && counter === counter2 )
      return setcounter2(counter2 + 10);

     if (
       (counter === 5 && 0 === counter2) ||  // sucede una sola vez
       (counter === counter2 && counter2 < 0) ||
       (counter === counter2 && counter2 !== 0 )
     )
       return setcounter2(counter2 + 10);

 if (counter === counter2 - 20)
   return setcounter2(counter2 - 10);

   }, [counter])

  // handleMas
  const handleMas = () => {
     setcounter(counter + 1);

     if (counter === -1 && counter2 === 0)
     return setcounter2(10)

  };
  // handleMenos
 const handleMenos = () => {
     setcounter(counter - 1)
 } ;
// handleReset
const handleReset = () => {  
    setcounter(0);
   setcounter2(0)
}

  return (
    <Fragment>
      <h1>Counter</h1>
      primer counter : {counter} <br />
      segundo counter : {counter2}
      <div>
        <button
          className="btn btn-outline-danger"
          onClick={(Reset) => handleReset()}
        >
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => handleMas()}>
          +
        </button>
        <button
          className="btn btn-warning text-white"
          onClick={() => handleMenos()}
        >
          -
        </button>
      </div>
    </Fragment>
  );
}

export default Counter