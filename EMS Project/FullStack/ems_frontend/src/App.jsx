import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComp from "./components/ListEmployeeComp";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmployeeComponent from "./components/EmployeeComponent";
function App() {
  return(
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
            <Route path="/" element={<ListEmployeeComp/>}></Route>
            <Route path="/employees" element={<ListEmployeeComp/>}></Route>
            <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
            <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App
