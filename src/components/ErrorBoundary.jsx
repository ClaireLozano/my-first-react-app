import React from 'react';
// Doc : https://github.com/bvaughn/react-error-boundary
import { ErrorBoundary as LibErrorBoundary } from 'react-error-boundary';

// Utile pour pas faire planter toutes l'appli, c'est bien d'en mettre un peu partout
// Doc sur les 2 options pour gérer les erreurs :
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

export function ErrorBoundary() {
  return (
    <>
      <ErrorBoundaryClass fallback={<p>Impossible d'afficher ...</p>}>
        <p>Element qui sera en error</p>
      </ErrorBoundaryClass>
      <LibErrorBoundary FallbackComponent={AlertError}>
        <p>Element qui sera aussi en error</p>
      </LibErrorBoundary>
    </>
  );
}

function AlertError({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>{error.toString()}</p>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}

// A mettre dans un fichier ErrorBoundary.tsx tout seul
class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Changer l'etat lorsque l'on a une error
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  // Ce qu'on doit faire lorsqu'on a une error
  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }

  // Ce que l'on doit renvoyer si jamais on a une erreur
  render() {
    if (this.state.hasError) {
      // Soit ce qu'on a mis dans le fallback en cas d'erreur
      return <div>Something went wrong ...</div>;
    }

    // Soit ce qu'il y a dans le children
    return this.props.children;
  }
}
