import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Flex from './Flex';
import MyNavbar from './MyNavbar';
import Users from './Users';
import MyRouter from './MyRouter';
import { Navbar } from 'react-bootstrap';
import LoginPage from './LoginPage';
import SignUpPage from './SignUp';


function App() {
  return (
   <BrowserRouter>
   <MyNavbar />
      <Routes>
        <Route path='' element={<Users />}/>
        <Route path='/flex' element={<Flex />}/>
        <Route path='/routing' element={<MyRouter />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
