import{} from 'react-router-dom'
import React from 'react'
import CategoryItems from './CategoryItems'

export default function CategoryList({catalog=[]}) {


  return (
      <div className='list'>
        {catalog.map((el)=> (
            <CategoryItems key={el.idCategory} {...el}/>
       ))}
    </div>
  
  )
}
