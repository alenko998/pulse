import React from 'react'
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider, 
} from 'react-router-dom'
import Account from './routes/Account'
import Branding from './routes/Branding'
import Signin from './routes/Signin'
import Recover from './routes/Recover'
import Signup from './routes/Signup'
import SidebarLayout from './layouts/SidebarLayout'
import Organization from './routes/Organization'
import Terms from './routes/Terms'
import Submit from './routes/Submit'
import Employees from './routes/Employees'
import Thankyou from './routes/Thankyou'
import Integrations from './routes/Integrations'
import Values from './routes/Values'
import Drivers from './routes/Drivers'
import Segments from './routes/Segments'
import SurveyQuestions from './routes/SurveyQuestions'
import Engagament from './routes/Engagament'
import OpenEnded from './routes/OpenEnded'
import Attributes from './routes/Attributes'
import StartSurvey from './routes/StartSurvey'
import Survey from './routes/Survey'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/recover' element={<Recover/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/startSurvey' element={<StartSurvey/>}/>
        <Route path='/survey' element={<Survey/>}/>
        <Route path='/submit' element={<Submit/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/dashboard' element={<SidebarLayout/>}>
            <Route path='organization' element={<Organization/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='branding' element={<Branding/>}/>
            <Route path='employees' element={<Employees/>}/>
            <Route path='drivers' element={<Drivers/>}/>
            <Route path='integrations' element={<Integrations/>}/>
            <Route path='values' element={<Values/>}/>
            <Route path='segments' element={<Segments/>}/>
            <Route path='surveyQuestions' element={<SurveyQuestions/>}/>
            <Route path='engagament' element={<Engagament/>}/>
            <Route path='openEnded' element={<OpenEnded/>}/>
            <Route path='attributes' element={<Attributes/>}/>
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