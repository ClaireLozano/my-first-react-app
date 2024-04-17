import { useReducer, useCallback } from 'react';

// Déplacer le reducer et le hook dans un autre fichier
function todoReducer(
  state: any,
  action: { type: string; payload: { name: string; checked: boolean } }
) {
  console.log({ state, action });

  if (action.type === 'REMOVE_TODO') {
    // Ne jamais muter l'état, il faut créer un nouvel objet
    return {
      ...state,
      todos: state.todos.filter((todo: any) => todo !== action.payload),
    };
  }

  if (action.type === 'TOGGLE_TODO') {
    // Ne jamais muter l'état, il faut créer un nouvel objet
    return {
      ...state,
      todos: state.todos.map(
        (todo: any) => (todo === action.payload ? { ...todo, checked: !todo.checked } : todo) // ici pareil, jamais de mutation
      ),
    };
  }

  return state;
}

function useTodos() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [
      {
        name: 'faire les courses',
        checked: false,
      },
      {
        name: 'faire le ménage',
        checked: false,
      },
      {
        name: 'faire une machine à laver',
        checked: false,
      },
    ],
  });

  return {
    todos: state.todos,
    toggleTodo: useCallback((todo: any) => dispatch({ type: 'TOGGLE_TODO', payload: todo }), []),
    removeTodo: useCallback((todo: any) => dispatch({ type: 'REMOVE_TODO', payload: todo }), []),
  };
}

export function UseReducer() {
  const { todos, toggleTodo, removeTodo } = useTodos();

  return (
    <>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.name}>
            <input type="checkbox" name="check" onClick={() => toggleTodo(todo)} />
            {todo.name}
            <button onClick={() => removeTodo(todo)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </>
  );
}
