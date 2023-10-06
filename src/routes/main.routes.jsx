import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Erro from "../pages/Erro/Erro";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}