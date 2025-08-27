import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';




function App() {
  return (
    <>
      <BrowserRouter basename="/inxcode">
        <Routes>
          
          <Route path="/" element={<Home />} />
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;