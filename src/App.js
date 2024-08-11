import './App.css';
import { Sing } from './singin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Main } from './main';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signup' element={<Sing/>} />
    </Routes>
    </BrowserRouter>
      );
}

export default App;
