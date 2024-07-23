
import Firstlayout from './Layout/Firstlayout'

import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'



import Signuppage from './pages/Signuppage'
import Indexpage from './pages/Indexpage'
import Loginpage from './pages/Loginpage'
import Mainlayout from './Layout/Mainlayout'
import Addvehicle from './pages/Addvehicle'
import Vehiclepage from './pages/Vehiclepage'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>      
     
        <Route path='/' element={<Firstlayout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        
      
      </Route>
    
        <Route path='/' element={<Mainlayout/>}>
        <Route path='/home' element={<Vehiclepage/>}/>
        <Route path='/add-recipie' element={<Addvehicle/>}/>
        

      </Route>


      
      </>

     
    )
  )
  

  return (
    <>

  
     <RouterProvider router={router}/>
    </>
  )
}

export default App
