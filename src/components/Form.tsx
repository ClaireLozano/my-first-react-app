import { useState } from 'react';

export function Form() {
  const [firstname, setFirstname] = useState('John');

  const [lastname, setLastname] = useState('Doe');
  const handleChange = (e: any) => {
    setLastname(e.target.value);
  };

  const [checked, setChecked] = useState(true);
  const toggleCheck = () => {
    setChecked(!checked);
  };

  const reset = () => {
    setLastname('');
    setFirstname('');
  };

  console.log('render'); // Le problème c'est que tout le code va être executé à chaque fois que l'on touche au formulaire

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(new FormData(e.target));
    console.log(new FormData(e.target).get('firstname2'));
  };

  return (
    <>
      <hr></hr>
      <form>
        <input type="checkbox" name="check" checked={checked} onChange={toggleCheck} />
        <br />
        <input type="text" name="firstname" value={firstname} /> // on ne peut pas changer la valeur
        <br />
        <input type="text" name="lastname" value={lastname} onChange={handleChange} /> // on peut
        changer la valeur
        <br />
        <button onClick={reset} type="button" disabled={!checked}>
          Reset
        </button>
      </form>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname2" defaultValue="default value" />
        <br />
        <input type="text" name="lastname2" />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
