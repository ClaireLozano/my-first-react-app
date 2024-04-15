import { useCallback, useState } from 'react';

export function useIncrement(initial = 10): {
  value: number;
  plus: () => void;
  minus: () => void;
} {
  const [state, setState] = useState(initial);

  // Optimisation avec le useCallback puis ce que la fonction ne change jamais
  const plus = useCallback(() => setState((v) => v + 1), []);
  const minus = useCallback(() => setState((v) => v - 1), []);

  return { value: state, plus, minus }; // compteur / fonction d'incrémentation / fonction de decrémentation
}
