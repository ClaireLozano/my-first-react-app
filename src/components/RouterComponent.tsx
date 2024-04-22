import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

const nav = (
  <nav>
    <Link to="/counter">Counter</Link>
    <Link to="/portal">Portal</Link>
  </nav>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        {nav}
        <div>Page d'accueil</div>
      </>
    ),
  },
  {
    path: '/counter',
    element: (
      <>
        {nav}
        <div>Counter</div>
      </>
    ),
  },
  {
    path: '/portal',
    element: (
      <>
        {nav}
        <div>Portal</div>
      </>
    ),
  },
]);

export function RouterComponent() {
  return <RouterProvider router={router} />;
}
