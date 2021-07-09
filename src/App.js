import NavBar from "./components/NavBar";
import { BrowserRouter ,Route,Switch} from "react-router-dom";
import Login from "./components/Login";
import Todos from "./components/Todos";
import Signup from "./components/Signup";
import { useState,useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[])
  return (
    <BrowserRouter>
     <NavBar user={user}/>
     <Switch>
       <Route exact path="/">
       <Todos user={user}/>
       </Route>
       <Route path="/login">
       <Login/>
       </Route>
       <Route path="/signup">
       <Signup/>
       </Route>
     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
