import { useState } from 'react';

export function DataFlow() {
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <>
      <form>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
      </form>
    </>
  );
}

// reverse dataflow
function CGUCheckbox({ checked, onCheck }: any) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} checked={checked} />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
}
