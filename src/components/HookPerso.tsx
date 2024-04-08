import { useToggle } from '../hooks/useToggle';
import { useIncrement } from '../hooks/useIncrement';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useFetch } from '../hooks/useFetch';

// https://usehooks.com/
// https://usehooks-ts.com/
// https://github.com/streamich/react-use
export function HookPerso() {
  const [checked, toggleCheck] = useToggle();
  const { value, plus, minus } = useIncrement(0);

  useDocumentTitle('Editer compteur' + { value });

  const { loading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000'
  );

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      {checked && 'je suis coché'}
      <br />
      <button onClick={minus}>-</button>
      Compteur : {value}
      <button onClick={plus}>+</button>
      <br />
      <br />
      <br />
      <div> {loading && <div>Chargement...</div>}</div>
      <div>
        {' '}
        {data && (
          <div>
            Data:
            <ul>
              {data.map((post: any) => (
                <li key={post.id}>{post.title} </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div> {error && <div>Error : {error} </div>}</div>
    </>
  );
}
