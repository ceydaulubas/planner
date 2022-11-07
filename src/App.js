import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDolist from './pages/ToDoList';
import Profil from './pages/Profil';
import Success from './pages/Success';
import Calender from './pages/Calender';
import Home from './pages/Home';
import EditList from './components/ToDoList/EditList';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Profil' element={<Register />}></Route>
          <Route path='ToDoList' element={<ToDolist />}></Route>
          <Route path='Calender' element={<Calender />}></Route>
          {/* <Route path='Profil' element={<Profil />}></Route> */}
          <Route path='Success' element={<Success />}></Route>
          <Route path='EditTodaList' element={<EditList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
