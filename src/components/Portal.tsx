import { createPortal } from 'react-dom';

export function Portal() {
  return (
    <>
      <p>Je suis un texte</p>
      <Modal />
    </>
  );
}

function Modal() {
  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
        border: 'solid 1px grey',
        background: '#FFF',
      }}
    >
      Je suis une modal
    </div>,
    document.body
  ); // Element où l'on veut inserer l'element
}
