import { useState } from "react";

function Greeting (props:{shim :string}){
    return (
        <h1>Hello {props.shim}</h1>
    )
}
function Message() {
  const [name, setName] = useState("");
  return (
    <>
      <input onChange={(x)=>setName(x.target.value)}/>
      <Greeting shim={name}/>
    </>
  );
}

export default Message;
