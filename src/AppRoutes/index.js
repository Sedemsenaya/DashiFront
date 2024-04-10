import {BrowserRouter, Route, Routes} from "react-router-dom";
import Todo from "../components/Todo";
import Dashboard from "../components/Dashboard";

function AppRoutes() {
   return (
       <Routes>
           <Route path="/" element={<Dashboard/>}></Route>
           <Route path="/todo" element={<Todo/>}></Route>
       </Routes>
   )
}
export default AppRoutes