import React from 'react'
import Home from './Pages/Home/Home'
import List from './Pages/List/List'
import Hotel from './Pages/Hotel/Hotel'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="hotels">
            <Route index element={<List/>}/>
            <Route path=":ID" element ={<Hotel/>} />

          </Route>




        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
