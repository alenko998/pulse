import React from 'react'
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider, 
} from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Daj from './routes/One'
import Mije from './routes/Two'
import Account from './routes/Account'
import Branding from './routes/Branding'
import Signin from './routes/Signin'
import Recover from './routes/Recover'
import Signup from './routes/Signup'
import SidebarLayout from './layouts/SidebarLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/recover' element={<Recover/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<SidebarLayout/>}>
            <Route path='one' element={<Daj/>}/>
            <Route path='two' element={<Mije/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='branding' element={<Branding/>}/>
        </Route>
    </Route>
    )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App