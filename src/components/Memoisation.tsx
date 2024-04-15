import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Input } from './ProductList/forms/Input';

// Regarder le "profiler" dans devtools, pour regarder les perfs de l'appli

// /!\ Ne pas TOUT memoiser et utiliser de la memoir inutilement ...
// Coder normalement, puis voir comment optimiser tout ça, essayer de memoiser les composant parent et pas chaque enfants du parent

// A chaque fois que le name change, on doit refaire un rendu de tout, meme de Info qui n'a pas changé
// Pour éviter ça, soit on met la logique de l'input dans une autre fonction comme pour Info
// Soit on utilise le principe de Memoisation
export function Memoisation() {
  const [name, setName] = useState('');

  // En utilisant le useMemo, la fonction restera en memoire et donc on aura pas de nouveau rendu de InfoMemo
  const handleClick = useMemo(() => {
    return () => {
      console.log('Hello');
    };
  }, []);

  // Pour aller un peu plus vite que le useMemo, on peut utiliser le callback
  const handleClick2 = useCallback(() => {
    console.log('Hello 2');
  }, []);

  const nameRef = useRef(name);
  nameRef.current = name;

  // Ne sera pas réexecuter à chaque fois que le name change vu qu'on a une ref
  const handleClick3 = useCallback(() => {
    console.log(name);
  }, []); // pas besoin de mettre le name ici vu que la ref de name de change jamais

  return (
    <>
      <Input label="label" onChange={setName} value={name} />
      <InfoMemo onClick={handleClick} />
    </>
  );
}

// La memoisation consiste à sauvegarder le retour de la fonction dans une variable
// Si jamais on lui passe le "name" dans la fonction Info, on perd l'effet de la memoisation (car les params sont différents)
const InfoMemo = memo(function Info(props: { onClick }) {
  // Imaginons que cette fonction soit longue à executer ...
  console.log('log');
  return <>Info</>;
});
