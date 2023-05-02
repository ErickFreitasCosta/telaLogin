import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../Pages/login";
import Form from "../Pages/form";

function RouteApp() {

    return (
  
      <div >
        
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/form' element={<Form/>}/>
                
            </Routes>
          </BrowserRouter>
       
    
      </div>
  
    );
  }
  
  export default RouteApp;