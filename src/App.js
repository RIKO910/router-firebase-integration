import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
     
     <Header></Header>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
