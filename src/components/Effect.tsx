import { useEffect, useState } from 'react';
import { Input } from './ProductList/forms/Input';

export function Effect() {
  return (
    <>
      <div style={{ height: '50vh' }}></div>
      <EffectInputs />
      <EffectTimer />
      <div style={{ height: '50vh' }}></div>
    </>
  );
}

function EffectInputs() {
  const [firstname, setFirstname] = useState('John');
  const [title, setTitle] = useState('');
  const [y, setY] = useState(0);

  document.title = title; // Executé à chaque fois que l'on change le title ou le prenom

  // Executer uniquement quand le title change
  useEffect(() => {
    document.title = title;
  }, [title]); // Detecte quand le titre change

  // Executer uniquement au chargement de la page
  // Mais si le EffectInputs n'est plus appelé, le useEffect lui continura d'etre appelé
  useEffect(() => {
    console.log('mounted');
    window.addEventListener('scroll', () => {
      setY(window.scrollY);
    });
  }, []);

  // Ici, on détruit le event listener dès que le EffectInputs n'est plus présent dans le dom
  useEffect(() => {
    const handler = () => {
      setY(window.scrollY);
    };
    window.addEventListener('scroll', handler);

    return () => {
      // Lorsque le composant n'est plus utilisé ...
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <>
      <div>Scroll : {y}</div>
      <Input placeholder="Modifier le titre" onChange={setTitle} value={title} />
      <Input placeholder="Prénom" onChange={setFirstname} value={firstname} />
    </>
  );
}

function EffectTimer() {
  const [duration, setDuration] = useState(50);
  const [secondsLeft, setSecondsLeft] = useState(duration);

  const handleChange = (v: number) => {
    setDuration(v);
    setSecondsLeft(v);
  };

  // Surtout pas de setter à la racine des useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <>
      <br />
      <br />
      <br />
      <Input placeholder="duration" onChange={handleChange} value={duration} />
      <div>Timer : {secondsLeft}</div>
    </>
  );
}
