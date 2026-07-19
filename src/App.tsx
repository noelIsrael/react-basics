import Message from "./Message.tsx";
import { useState } from "react";
function App() {
  const [num, numSetter] = useState(0);
  console.log("comp app renderer")
  
  return (
    <div>
      <h2>the number is, {num}</h2>
      <button onClick={()=>numSetter((num)=> num+1)}>counter</button>
      <Message/>
    </div>
  );
}
export default App;
