import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
   <div>
    <div className="w-screen shadow-md py-6 px-3 bg-gray-700 text-white">
      <h1 className="flex container mx-12 font-bold">Countries of the World</h1>
    </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:name" element={<SingleCountry />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
   </div>
  );
}

export default App;
