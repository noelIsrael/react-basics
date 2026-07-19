import { useState } from "react";

function Greeting(props: { shim: string; idme: number }) {
  return (
    <>
      <h1>Hello {props.shim}</h1>
      <h1>yor age is {props.idme}</h1>
    </>
  );
}
function Message() {
  const [name, setName] = useState("");
  const [age, setAge]= useState(0);
  console.log("comp message rendered")
  return (
    <>
      <input onChange={(x) => setName(x.target.value)} />
      <input onChange={(y)=> setAge(Number(y.target.value))}/>
      <Greeting shim={name} idme={age} />
    </>
  );
}

export default Message;
