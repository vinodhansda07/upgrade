import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from './components/Counter';
import Fruits from './components/Fruits';
import Groceries from "./components/Groceries";
import Home from './components/Home';
import Parent from "./components/Parent";

function App() {
  
  return (
    <>
      <Router>
       
        <ul className='nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/counter'>Counter</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/fruits'>Fruits</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/groceries'>Groceries</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/parent'>Parent</Link>
          </li>
        </ul>
        
        <Routes>
          <Route exact path='/' element={ <Home pageContent="Welcome to Home"/> }></Route>
          <Route exact path='/counter' element={ <Counter /> }></Route>
          <Route exact path='/fruits' element={ <Fruits /> }></Route>
          <Route exact path='/groceries' element={ <Groceries /> }></Route>
          <Route exact path='/parent' element={ <Parent /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
