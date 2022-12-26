import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageCategoryView from "./manage-categories /manage-category-view";
import NavbarLayout from "./components/navbar-layout";
import {Route, Routes} from "react-router-dom";
import ManageProductsView from "./manage-products/manage-products-view";

function App() {
  return (
    <div className={"min-vh-100 bg-light"}>
        <NavbarLayout/>
        <div className={"container mt-5"}>
            <Routes>
                <Route path="/manage-categories" element={<ManageCategoryView/>}/>
                <Route path="/manage-products" element={<ManageProductsView/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
