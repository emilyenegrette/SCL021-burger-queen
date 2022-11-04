import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../pages/Home'
import Preparacion from '../pages/Preparacion'
import Listo from '../pages/Listo'

function Menu(){
  return(
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/preparacion">Preparacion</Link>
        </li>
        <li>
          <Link to="/listo">Listo</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/preparacion" element={<Preparacion/>}/>
        <Route path="/listo" element={<Listo/>}/>
      </Routes>
    </Router>
  );
}

export default Menu