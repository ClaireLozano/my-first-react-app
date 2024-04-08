import { Fragment } from 'react/jsx-runtime';

export function SimpleContent() {
  const style = { color: 'red' };
  const showText: boolean = false;
  const todos = ['element 1', 'element 2', 'element 3'];

  return (
    <Fragment>
      <div>
        <Title color="red" id="monid" className="demo" hidden>
          My children
        </Title>
        <p style={style}>Couleur rouge</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>

        {showText ? <p>je suis un texte</p> : <p>je n'affiche pas le texte</p>}
      </div>
    </Fragment>
  );
}

function Title({ color, children, hidden, ...props }: any) {
  if (!hidden) {
    return null; // on affichera pas le return tout en bas si on a pas de hidden
  }
  const title = 'title H1';
  const classeName = 'classeName';

  console.log(hidden); // true si il est dans la balise title, sinon false

  // Action sur element
  const handleClick = (e: any) => {
    alert("J'ai cliqué sur le tite");
    e.stopPropagation();
  };

  // Définir des propriété sur les balises
  const propsConst = {
    id: 'monid',
    className: 'maclasse',
  };

  return (
    <>
      <h1 {...propsConst} style={{ color }} className={classeName} onClick={handleClick}>
        {title}
      </h1>
      <h2 {...props}>{children}</h2>
    </>
  );
}
