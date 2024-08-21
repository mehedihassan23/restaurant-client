import React, { useState } from 'react'
import {Helmet} from "react-helmet"
import Swal from "sweetalert2"
import "./additem.css"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import usePublic from '../../../hooks/usePublic'
import useSecure from "../../../hooks/useSecure"

const AddItem = () => {
     const [AxiosPublic] = usePublic()
     const [AxiosSecure] = useSecure()

    const [addItem, setAddItem] = useState({name: "", category: "", price: "", recipe: ""});
    const [imageUrl, setImageUrl] = useState('');

    const {name, category, price, recipe} = addItem

    const formData = new FormData();
    formData.append('image', imageUrl);

    const apiKey = import.meta.env.VITE_Imgbb_Key
    const api = `https://api.imgbb.com/1/upload?key=${apiKey}`

    const handleChange = (event) => {
        setAddItem( {...addItem , [event.target.name] : event.target.value})
    }
    const handleFileChange = (event) => {
        const imageFile = event.target.files[0];
        setImageUrl(imageFile)
    }

    const submitAddItemForm = async (event) => {
        event.preventDefault()
        const response = await  AxiosPublic.post(api, formData)
      

        const menuData = {name, recipe, category, price , image: response.data.data.display_url, deleteImage: response.data.data.delete_url}
   

        const backendresponse = await AxiosSecure.post("/menu", menuData)
 
        if(backendresponse.data._id){
            Swal.fire({
                title: "Good job!",
                text: "New item is added!",
                icon: "success"
              });
              setAddItem({name: "", category: "", price: "", recipe: ""})
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Make sure, You are Admin!",                
              });
        }
   
    }
  return (
    <div className='addItem'>
        <Helmet>
            <title>। Add Item</title>
            <link rel="shortcut icon" href="https://res.cloudinary.com/doolocyaf/image/upload/v1723997467/11873385_nyz8an.png" type="image/x-icon" />
        </Helmet>
        <SectionTitle subTitle="What's new?" title="add an item"></SectionTitle>
        <div className="additemforms">
            <form onSubmit={submitAddItemForm}>
                
                <div className="inputGroup">
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" value={name} name='name' onChange={handleChange}/>
                </div>

                <div className="row">
                    <div className="inputGroup" style={{marginRight: "1rem"}}>
                        <label htmlFor="category">Category</label>
                        <select name='category' onChange={handleChange}>
                            <option value="">Select an item</option>
                            <option value="drinks">Drinks</option>
                            <option value="popular">Popular</option>
                            <option value="dessert">Dessert</option>
                            <option value="pizza">Pizza</option>
                            <option value="cofee">cofee</option>
                        </select>
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="price">Price</label>
                        <input type="number" value={price} name='price' onChange={handleChange}/>
                    </div>
                </div>

                <div className="inputGroup">
                    <label htmlFor="recipe">Description</label>
                    <textarea name="recipe" value={recipe} onChange={handleChange}></textarea>
                </div>

                <div className="inputGroup">
                    <input type="file" name="image" id="file" 
                    onChange={handleFileChange} />
                </div>

                <input type="submit" value="Add Item" />   
            </form>
        </div>
    </div>
  )
}

export default AddItem
