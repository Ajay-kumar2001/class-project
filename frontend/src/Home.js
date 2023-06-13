import { useEffect, useState } from "react"
import axios from "axios"
import Prod from "./Prod"

let Home=()=>{
    let [pdata,setPdata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getprod').then((res)=>{
            setPdata(res.data)
        })

    },[])
    return(
        <div>
            {
                pdata.map((item,i)=><Prod data={item} key={i}/>)
            }

        </div>
        
        
    )
}
export default Home