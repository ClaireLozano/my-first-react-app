import { useEffect, useRef, useState } from 'react';
import { Input } from './ProductList/forms/Input';

export function UseRef() {
  const ref = useRef('');
  console.log('ref');

  return (
    <>
      <p onClick={() => (ref.current = 'hello')}>
        Lorsque l'on click, on ne va avoir de nouveau rendu, mais le ref.current aura bien été
        modifié. utilise pour mémoriser une valeur.
      </p>
      <UseRefForHTML />
    </>
  );
}

// UseRef est utilisé pour avoir un objet unique et qui persiste tout au long du cycle de vie du composant qui aura une clé courante à laquelle on pourra lui assigner une valeur
// Peut etre utilisé aussi pour récupérer la ref d'un element HTML et pouvoir le manipuler par la suite
// Pour les composants personalisé ça ne fonctionnera pas à moins d'utiliser le "forwardRef"
function UseRefForHTML() {
  const ref = useRef(null); // La meme chose que ça : const prefixRef = useMemo(() => ({current: null}), []);
  const prefixRef = useRef({ current: null });

  const [prefix, setPrefix] = useState('');

  /*
  useEffect(() => {
    console.log(ref.current?.offsetHeight);
  }, []); // pas besoin de mettre le ref ici car c'est toujours le meme objet qui est réutilisé, ne pas mettre non plus les setter
  */

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current); // Toutes les secondes, il va afficher la nouvelle valeur de prefix
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  // On en peut pas envoyer de ref si on l'appel "ref" à un composant enfant depuis le parent
  return (
    <>
      <Input ref={ref} label="label" value={prefix} onChange={setPrefix}>
        un nouveau texte avec une ref
      </Input>
    </>
  );
}

/*export const InputTest = forwardRef(function InputTestElement({ placeholder, value }, ref) {
  return (
    <>
      <input ref={ref} />{' '}
    </>
  );
});*/
