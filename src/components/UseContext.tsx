import { ThemeContextProvider, useTheme } from '../hooks/useTheme';
import { CustomCheckbox } from './ProductList/forms/CustomCheckbox';

// Des fois c'est compliqué de faire descendre/remonter de l'information à X composants enfants => prop deeply
// Ce qui est dommage c'est que tout est re-rendu => créer un ThemeContextProvider
export function UseContext() {
  return (
    <>
      <br />
      <CustomCheckbox label="coucou"></CustomCheckbox>
      <br />
      <ButtonTheme></ButtonTheme>
      <br />
      <br />
      <ThemeContextProvider>
        <ButtonTheme></ButtonTheme>
      </ThemeContextProvider>
    </>
  );
}

// Le ThemeContextProvider peut être mis dans le app.tsx car il sera rendu qu'une seule fois

function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}
