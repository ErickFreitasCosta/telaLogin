
import BrandExample from "../../componets/footer";
import './styleDiv.css'
import React,{useState, useEffect} from "react"
import axios from "axios";
function Form() {

  const[loading,setLoading] =useState(false)
  const[data,setData] = useState([])

  useEffect(()=>{
    setLoading(true)
    axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    })
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((e)=>console.log(e))
    .finally(() =>setLoading(false))
  },[]) //Pq isso só some o loading com isso



    return (
  
      <div >
        <div className="div-footer">
        <BrandExample/>
        </div>

        <div className="div-centralizar">
        {loading &&(
        <div>
            <h1>Aguarde...</h1>
        </div>
      )}

         {data.map((product)=>(
           <div className="div-card" key={product.id}>
            <div><img src={product.image} className="img-products"/></div>
            <div>{product.title}</div>

           </div>
         ))}

        </div>
        







      <div className="btn-products">
  
       
      </div>
    
      </div>
  
    );
  }
  
  export default Form;