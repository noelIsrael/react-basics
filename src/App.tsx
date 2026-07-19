//import Message from "./Message.tsx";
import { useState } from "react";
function App() {
  const [num, numSetter] = useState(0)
  return (
    <div>
      <h2>the number is, {num}</h2>
      <button onClick={()=>numSetter((num)=> num+1)}>counter</button>
    </div>
  );
}
export default App;
