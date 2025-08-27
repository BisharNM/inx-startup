import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';




function App() {
  return (
    <>
      <BrowserRouter basename="/GODWIT-HOLIDAYS">
        <Routes>
          
          <Route path="/" element={<Home />} />
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;