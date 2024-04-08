import { useState } from 'react';

export function useIncrement(initial = 10): {
  value: number;
  plus: () => void;
  minus: () => void;
} {
  const [state, setState] = useState(initial);

  const plus = () => setState((v) => v + 1);
  const minus = () => setState((v) => v - 1);

  return { value: state, plus, minus }; // compteur / fonction d'incrémentation / fonction de decrémentation
}
