import Areylen from "./areylen.tsx";
import { useState, useEffect } from "react";
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
  const [loading,loadingSet] = useState(true)
  const[error, errorSet]= useState("");
  const [arey, areySeter] = useState<{name:string,id:number}[]>([]);

  async function getUsers(){
      try{
        const whatwegot = await fetch ('https://jsonplaceholder.typicode.com/users');
        if(!whatwegot.ok){
          throw new Error("user not found, status: "+ whatwegot.status);
        } else {
          const data = await whatwegot.json();
          areySeter(data);
        }
      }
      catch(err){
        errorSet('something went wrong '+ (err as Error).message);
      }
      finally {
        loadingSet(false);
      }
  }

  useEffect(()=>{getUsers();},[]);
  return(
    <>
    {loading && <p>loading...</p>}
    {error && <p>{error}</p>}

    {arey.map((human)=> (<Display key={human.id} name={human.name} />))}
    <New sebwesk={(name,id)=>areySeter([...arey,{name:name,id:id} ])}/>
    <Areylen bzhi={arey.length} />
    </>
  );
}
export default App;