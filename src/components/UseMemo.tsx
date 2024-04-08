import { useMemo, useState } from 'react';
import { Input } from './ProductList/forms/Input';

export function UseMemo() {
  const [firstname, setFirstname] = useState('John');
  const [password, setPassword] = useState('MotDePasse');

  // Utilisé pour optimiser et pas tout réexecuter à chaque changement
  // A utiliser quand une fonction est bcp trop lente, pas forcement tout le temps
  const security = useMemo(() => {
    // Le retour sera stocké dans la variable "security"
    return passwordSecurity(password);
  }, [password]); // dès que password est modifié, on call le useMemo

  return (
    <>
      <Input
        placeholder="Nom d'utilisateur"
        onChange={setFirstname}
        value={firstname}
        label="Nom d'utilisateur : "
      />
      <br />
      <Input placeholder="Password" onChange={setPassword} value={password} label="Password : " />
      <p>Security : {security}</p>
    </>
  );
}

// Imaginons que cette fonction soit longue
function passwordSecurity(password: string): string {
  console.log('fonction un peu longue');
  return password + ' ok';
}
