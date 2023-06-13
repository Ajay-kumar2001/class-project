import Gcon from "./Gcon"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
let Logout=()=>{
    let navigate=useNavigate()
    let gobj=useContext(Gcon)
    gobj.upcred({"isadmin":false,"isuser":false,"islogin":false,"token":"","userid":""})
    navigate("/")

}
export default Logout