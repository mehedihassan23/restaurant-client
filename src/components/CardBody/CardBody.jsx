import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useSecure from '../../hooks/useSecure'
import Swal from 'sweetalert2/src/sweetalert2.js'

const CardBody = ({singlemenu}) => {
    const {user} = useContext(AuthContext)   
    const [AxiosSecure] = useSecure()
    const {_id, name, recipe, image, price} = singlemenu

    const addToCart = ({_id, name, image, recipe, price}) => {
        if(!user){
            return Swal.fire("Please login first!");
        }
        AxiosSecure.post("/cart", {_id, name, recipe, image, price, email: user?.email})
        .then(res => {
            if(res.data.success){
                Swal.fire({
                    title: "Added!",
                    text: "Item added to your cart!",
                    icon: "success"
                  });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "This item already added to cart!"                   
                  });
            }
        })
    }
     
  return (
    <div className="card-body">
            <div className="card-image">
                <img src={image} alt="menu image" />
                <p className="price"> ${price}</p>
            </div>
    
            <div className="card-details">
                <h1 className="card-name">{name}</h1>
                <p className="card-description"> {recipe} </p>
                <button className="card-button" onClick={()=> addToCart({_id, name, image, recipe, price})}>Add to cart</button>
            </div>
            
     </div>
  )
}

export default CardBody
