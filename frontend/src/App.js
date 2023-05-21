
import './App.css';
import Login from './pages/login/components/Login';
import { HeaderSuper } from './shared/headerSuper';
import { HeaderAdmin } from './shared/headerAdmin';
import { Footer } from './shared/footer';
import WareHouseList from './pages/wareHouses/components/wareHouseList';
import SupervisorList from './pages/supervisor/components/supervisorList';
import NewWareHouse from './pages/wareHouses/components/newWareHouse';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
     <HeaderAdmin />
    <Outlet />
    </>
  );
}
/* #49b0d9 */ 
// #2890b9
export default App;
