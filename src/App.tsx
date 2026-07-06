import { useState } from "react";
function Selam (props: { mulueshim: string, idme: number }) {
  return <h1>Hello, {props.mulueshim}! you are {props.idme} years old.</h1>;
}
function App() {
  const people = [
    { id: 1, mulueshim: "Alice", idme: 25 },
    { id: 2, mulueshim: "Bob", idme: 30 },
    { id: 3, mulueshim: "Charlie", idme: 35 },
  ];
  return (
    <div>
      {people.map((person) => (
        <Selam key={person.id} mulueshim={person.mulueshim} idme={person.idme} />
      ))}
    </div>
  );
}
export default App