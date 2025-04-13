import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FluidMenuAnimation  from './Days/1';
import './index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Day/1' element={<FluidMenuAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <>
      <div className="bg-[#010100] border-[1px] rounded-2xl border-[#262626] h-[80vh] w-[80vw] p-5">
          
      </div>
    </>
  )
}
export default App;
