import React, { useContext }  from 'react'
import "./pagination.css"
import { AuthContext } from '../../AuthProvider/AuthProvider'
import useMenu from "../../hooks/useMenu"

const Pagination = () => {
    const {currentpage, setCurrentPage} = useContext(AuthContext)
    const [menu ] = useMenu()

    const totalBUtton = Math.ceil(menu.length / 6)
    
    const handlePreviousPage = () => {
        if (currentpage>1) {
            setCurrentPage(currentpage => currentpage - 1)
        } else {
            setCurrentPage(currentpage)
        }
    }

     
  return (
    <div className='pagination'>
      <button className='previous'
      disabled={currentpage == 1 ? true : false}
       onClick={handlePreviousPage}>Previous</button>
      
      <button className='next' 
      disabled={currentpage == totalBUtton ? true : false}
      onClick={ () => setCurrentPage(currentpage => currentpage + 1)}>Next</button>
    </div>
  )
}

export default Pagination
