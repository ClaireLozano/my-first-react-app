import { useId } from 'react';
import { useToggle } from '../../../hooks/useToggle';

export default function Input({ placeholder, value, onChange, label }: any): JSX.Element {
  const id = useId();
  const [show, toggle] = useToggle(true);

  if (!show) {
    return <></>;
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={toggle}>Fermer</button>
    </>
  );
}
