import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Details, Search } from './pages'

const router = createBrowserRouter([
  {
    element: <Search />,
    path: '/',
  },
  {
    element: <Details />,
    path: '/:id',
  },
])

export const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
