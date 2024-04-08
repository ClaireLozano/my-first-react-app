import { useState } from 'react';

// Toujours préfixé les hooks par "use"
// appellé dans le meme odre et en meme quantité
// reproduire une signature qui est sensiblement la meme à celle des hooks
// Avantage : regrouper la logique qui permet de changer la valeur dans une fonction
export function useToggle(initial = false): [boolean, () => void] {
  const [state, setState] = useState(initial);
  const toggle = () => setState((v) => !v);
  return [state, toggle]; // valeur / modificateur
}
