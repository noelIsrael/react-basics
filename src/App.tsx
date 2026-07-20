import Areylen from "./areylen.tsx";
import { useState } from "react";
function Display (props : {name:string}){
  return(
    <h4 >hi {props.name} </h4>
  )
}
function New ({sebwesk} : {sebwesk : (name:string , id:number)=> void}){
  const [name, nameSet] =useState("");
  const [id, idSet] =useState("");
  return(
    <>
    <input placeholder="enter name" onChange={(e)=>nameSet(e.target.value)}/>
    <input placeholder="enter id" onChange={(e)=>idSet(e.target.value)}/>
    <button onClick={()=>sebwesk(name,Number(id))}>submit</button>
    </>
  )
}


function App() {
  const noel = {id: 1, name:'noni'};
  const abel = {id:2, name:'abi'};
  const sada = {id:3, name:'sadu'};


  const [arey, areySeter] = useState([noel,abel,sada])
  return(
    <>
    {arey.map((human)=> (<Display key={human.id} name={human.name} />))}
    <New sebwesk={(name,id)=>areySeter([...arey,{name:name,id:id} ])}/>
    <Areylen bzhi={arey.length} />
    </>
  );
}
export default App;