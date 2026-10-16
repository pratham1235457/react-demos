import { useState } from "react";

const Main = () => {
  const myName = "Pratham Gupta";

  const date = new Date();

  const [friends, setFriends] = useState(["Alex", "John","Carry", "Rumble"]);
  const addOneFriend = () => setFriends([...friends, "Pratham Gupta"]);
  const removeFriend = () => setFriends(friends.filter((f) => f = "John"));
  
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <main>
      <h2>Main Content - By { myName }</h2>
      
      <p>This is the main content.</p>
      
      <p>Use this as your game: </p>
      
      <section>{ count }</section>
      
      <button onClick={ increment }>+</button>
      <button onClick={ decrement }>-</button>
      
      <p>Date: { date.getDate() }</p>
      
      <p>My Friends List:</p>{ friends.map((f) => (
          <li key={ Math.random() }>{f}</li>
      ))}

      <button onClick={ addOneFriend }>Add new Friend</button>
      <button onClick={ removeFriend }>Remove One Friend</button>
    </main>
  );
};


export default Main;