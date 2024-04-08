import { useState } from 'react';

export function Counter() {
  // Pas de hook dans des boucle ou dans des conditions, il faut toujours executer le meme nombre de hook, sinon prb mémoire
  const [count, setCount] = useState(0); // Hook pour les états, count = 1 au 2nd appel

  console.log('render'); // on affiche 2 fois pour le mode strict qui execute 2 fois pour être sur qu'il n'y ait pas d'erreur

  const increment = () => {
    setCount(count + 1); // au moment du click, on réexecute tout le contenue de Counter
    setCount(count + 1);
    setCount(count + 1); // il affichera 1 et pas 3, c'est comme si il faisait "setCount(0+1);" 3 fois

    // Pour incrémenter de 3 en 3
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <hr></hr>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>

      <Person></Person>
    </>
  );
}

function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
  });

  const editPersonAge = () => {
    // On ne peut pas faire de mutation genre "person.age = 13;"
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <p>
        Age de {person.firstName} : {person.age}
      </p>
      <button onClick={editPersonAge}>Incrémenter Age</button>
    </>
  );
}
