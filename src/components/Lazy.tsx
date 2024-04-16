import { Suspense, lazy } from 'react';

// Les composant chargé avec lazy sont des composant suspendu, on a besoin du composant suspens sinon error
export function Lazy() {
  const page = 'input';

  const pageContent = getPageContent(page);

  return <Suspense fallback={<p>Chargement en cours...</p>}>{pageContent}</Suspense>;
}

function getPageContent(page: string): JSX.Element {
  if (page === 'input') {
    const InputLazy = lazy(() => import('./ProductList/forms/Input')); // Il faut mettre le composant par default

    return (
      <>
        {' '}
        <InputLazy></InputLazy>
      </>
    );
  }

  return (
    <>
      <p>Vide</p>
    </>
  );
}
