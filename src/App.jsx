import { useState } from 'react'
import Test from './Components/Test';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';

function App() {
 

  return (
    <div style={{marginTop: '110px'}}>
      <Navbar1 />
      <Navbar2 />
      <Test />
    </div>
  )
}

export default App