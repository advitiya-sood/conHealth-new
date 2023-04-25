import './App.css';
import MainArea from './Components/MainArea';

import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Layout/Sidebar';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
    <MainArea/>
   </BrowserRouter>
  );
}

export default App;
