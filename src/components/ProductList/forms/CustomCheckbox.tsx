export function CustomCheckbox({ checked, label, onChange, id }: any): JSX.Element {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="form-check"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
