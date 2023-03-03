import React, { useState } from 'react'

const categories = ['Condones', 'Lubricantes']
 

export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState([]) 
    const [category, setCategory] = useState('')

    const onAddCategory= () => { 
    
    setCategories(list=> [...list, category])
    setCategory('')

    }
    const onSetCategory = (evt) =>{
        setCategory(evt.target.value)
    }
    return(
        <>
         <h1>Challenge4</h1> 
         <input  placeholder ="Coloque una categoria" type="text" value={category}
         onChange={(event) => onSetCategory(event)}/>
         <button onClick = {()=> onAddCategory()}>Agregar</button> 
         <ol>
                    {
                        categories.map(
                            (category, key) => 
                            {
                                return <li key={ key }>{category}</li>
                            }
                        )
                    }
                </ol> 
        </>
    )
}



export default GiftExpertApp