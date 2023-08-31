import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import store from './store/store'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </main>
)
