
import './App.css';
import Login from './components/Login';
import {Route, Routes} from "react-router-dom"
import Table from './components/Table';


function App() {
  return (
    <>

    <Routes>
      <Route exact path="/" element={<Login/>}/>

      <Route path="/Table" element={<Table/>}/>
      
    </Routes>
    </>
  );
}

export default App;
