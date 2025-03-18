import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "One Punch" ])

    const onAddCategory = (newCategory) =>{

        if (categories.includes(newCategory)) return;

        setCategories( [newCategory, ...categories])
        /* Otra forma es desestructurando */
        /* setCategories( cat => ([...cat, "Pokemon"])) */
    }
    
    

  return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory 
            /* setCategories = {setCategories} */
            onNewCategory = {(event) => onAddCategory(event)}
        />

        {/* LISTADO DE GIF */}
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
    </>
  )
}
