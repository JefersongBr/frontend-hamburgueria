import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import CardapioPage from './pages/Cardapio.jsx'
import CarrinhoPage from './pages/Carrinho.jsx'
import InformacoesPage from './pages/info.jsx'
import LoginPage from './pages/login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/cardapio",
    element: <CardapioPage/>
  },

  {
    path: "/carrinho",
    element: <CarrinhoPage/>
  },

  { 
    path: "/info",
    element: <InformacoesPage/>
  },

  {
    path: "/login",
    element: <LoginPage/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
