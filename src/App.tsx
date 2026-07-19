// import Message from "./Message.tsx";
// import { useState } from "react";
function Shower(props: { name?: string; age: number }) {
  return (
    <h4>
      hi {props.name} you are {props.age}
    </h4>
  );
}
function App() {
  const noni = { name: "noel", age: 22 };
  const abi = { name: "abi", age: 23 };
  const friends = [noni, abi];
  // const me = "noh";

  return (
    <div>
      {friends
        .filter((fri) => fri.age > 22)
        .map((friend) => (
          <Shower name={friend.name} age={friend.age} />
        ))}
    </div>
  );
}
export default App;
