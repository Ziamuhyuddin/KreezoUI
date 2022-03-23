import "./App.css";
import Canvas from "./Components/Canvas/HomePage";
import Align from "./Components/Align/Index";
import Navbars from "./Components/Navbar/Navbar";
import Objective from "./Components/Objective/Objective";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckIn from "./Components/buttonClick/checkIn/CheckIn";
import OffCanvas from "./Components/reusable/canvas/OffCanvas";
import NewObjective from "./Components/NewObjective/Objective";
import CreateKey from "./Components/CreateKey/CreateKey";
import Index from './Components/Objective/ObjectiveCheckIn/Index';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <OffCanvas/> */} {/* <Customers/> */} {/* <CheckIn/> */}
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="/align" element={<Align />} />
          <Route path="/objective" element={<Objective />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
