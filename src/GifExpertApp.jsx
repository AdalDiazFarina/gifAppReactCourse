import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])
  const {isLoading, setIsLoading} = useState(true);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); 
  }
  
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value)}
      />

      <ol>
        {
          categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>
    </>
  )
}
