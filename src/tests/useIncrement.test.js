import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useIncrement } from '../hooks/useIncrement';

describe('useIncrement', () => {
  it('should use default value', () => {
    const { result } = renderHook(() => useIncrement(5));
    expect(result.current.value).toBe(5);
  });

  it('should increment value', () => {
    const { result } = renderHook(() => useIncrement(5));
    // act() est utilisé pour simuler le cycle de vie des composants
    // React dans un environnement de test afin de garantir que les résultats
    //attendus sont obtenus après toutes les mises à jour d'état asynchrones.
    act(() => result.current.plus());
    expect(result.current.value).toBe(6);
  });

  it('should decrement value', () => {
    const { result } = renderHook(() => useIncrement(5));
    act(() => result.current.minus());
    act(() => result.current.minus());
    expect(result.current.value).toBe(3);
  });
});
