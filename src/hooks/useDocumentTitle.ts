import { useEffect, useRef } from 'react';

export function useDocumentTitle(title: string): void {
  const titleRef = useRef(document.title); // Utiliser pour utiliser le meme attribut dans les 2 effects

  // Lorsque le composant n'est plus utilisé, on reset le title
  useEffect(() => {
    return () => {
      document.title = titleRef.current;
    };
  }, []);

  useEffect(() => {
    document.title = title ? title : titleRef.current;
  }, [title]); // Detecte quand le titre change
}
