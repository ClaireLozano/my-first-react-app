import { useId } from 'react';

export default function Input({ placeholder, value, onChange, label }: any): JSX.Element {
  const id = useId();

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
    </>
  );
}
