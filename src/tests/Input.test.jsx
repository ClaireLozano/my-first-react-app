import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from '../components/ProductList/forms/Input.tsx';
import { userEvent } from '@testing-library/user-event';

describe('<Input>', () => {
  it('should render label correctly', () => {
    const { container } = render(<Input label="label"></Input>);
    screen.debug(); // Il va montrer le dom en console
    // Pas mal pour des composants simple, mais sinon utiliser le .toMatchFileSnapshot
    expect(container.children[0]).toMatchInlineSnapshot(` 
      <label
        for=":r0:"
      >
        label
      </label>
      `);
  });

  it('should render input correctly', () => {
    const { container } = render(<Input label="label"></Input>);
    expect(container.children[1]).toMatchInlineSnapshot(`
      <input
        class="form-control"
        id=":r1:"
        type="text"
        value=""
      />
      `);
  });

  it('should close the input on click', async () => {
    const { container } = render(<Input label="label"></Input>);
    // getByText ou getByRole c'est pas mal pour tester l'accessibilité en meme temps
    // byId et byClass pas ouf
    await userEvent.click(screen.getByText('Fermer'));
    screen.debug();
    expect(container.children.length).toBe(0);
  });
});
