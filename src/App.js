import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/AddEdit";
import AddEditss from "./pages/AddEditss"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addContact" element={<AddEditss/>} /> 
        <Route path="/update/:id" element={<AddEdit/>} />
      </Routes>
    </div>
    </BrowserRouter>   
   
  );
}

export default App;
