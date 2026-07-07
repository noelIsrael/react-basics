import {useState} from 'react';
import{useEffect} from 'react';

function App(){
  const [count, setCount] = useState(0);
  const [shim, shimseter] = useState("");
  return(
    <div>
      <Hito selambel={(agateme) => shimseter(agateme.target.value)}/>
      <Greet shim = {shim}/>
      <Display count={count}/>
      <Buttton demr={() => setCount(count + 1)}/>
    </div>
  )
    
}

function Buttton({demr}: {demr: () => void}){
  return(
    <button onClick={demr}>Click me</button>
  )
}
function Display({count}: {count: number}){
  return(
    <h1>Display: {count}</h1>
  )
}

function Greet({shim}:{shim:string}){
  return (
    <h1> hello {shim}</h1>
  )
}
function Hito({selambel}:{selambel:(event: React.ChangeEvent<HTMLInputElement>)=>void}){
  return(
    <input type="text" onChange={selambel}/>
  )
}
export default App;
