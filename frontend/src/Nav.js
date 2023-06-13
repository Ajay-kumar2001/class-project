import { useContext} from "react"
import { Link} from "react-router-dom"
import './Nav.css'
import Gcon from "./Gcon"

let Nav=()=>{
   let ucred=useContext(Gcon)
   console.log(ucred)
   
    return(<div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
       {!ucred.islogin&&<Link to="/login">Login</Link>}
       {ucred.islogin&&<Link to="/logout">Logout</Link>}
       {!ucred.islogin&&  <Link to="/register">Register</Link>}
       {ucred.islogin&&<Link to="/cart">Cart</Link>}
      {ucred.isadmin&& <Link to="/listusers">ListUsers</Link>}
      { ucred.isadmin&&<Link to="/dashboard">Dashboard</Link>}
      {ucred.isadmin&& <Link to="/addprod">Addproducts</Link>}
        <div>{ucred.userid}</div>
        

    </div>)
}
export default Nav