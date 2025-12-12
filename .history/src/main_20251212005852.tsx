import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Blog from './pages/Blog.tsx'
import NewsLetter from './pages/NewsLetter.tsx'
import Root from './pages/Root.tsx'
import { DarkProvider } from './context/DarkContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/store/index.ts'
const routes=createBrowserRouter([
  {
  path:"/",
  element:<Root/>,
  children:
    [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"blog",
        element:<Blog/>,
        children:[
          {
            path:":id",
            element:<Blog/>
          }
        ]
      },
      {
        path:"news",
        element:<NewsLetter/>
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DarkProvider>
        <RouterProvider router={routes}></RouterProvider>
      </DarkProvider>
    </Provider>
  </StrictMode>,
)
