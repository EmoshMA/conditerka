import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRoutes } from 'react-router-dom'
import Documentation from './Documentation'


function App() {
  const route = useRoutes([
    {
      path:'/',
      element:<>Главная</>,
      // главная
    },
    {},
    {
      path:'/documentation',
      element:<Documentation/>,
    },
    {},
    {},
  ]);
return route
}

export default App
