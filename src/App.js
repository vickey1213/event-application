import logo from './logo.svg';
import './App.css';
import First1 from './Componenets/First1';
import {BrowserRouter } from 'react-router-dom'
import {Routes,Route} from "react-router-dom"
import {Create} from './Componenets/Create';
import Events from './Componenets/Events';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<First1/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/events" element={<Events/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
