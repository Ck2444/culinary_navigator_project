import {Link} from 'react-router-dom'

import React from 'react'

export default function CategoryItems(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;
    
  return  <div className="card">
  <div className="card-image">
    <img src={strCategoryThumb} alt={strCategory}/>
  </div>
  <div className="card-content">
  <span className="card-title">{strCategory}</span>
    <p>{strCategoryDescription.slice(0, 60)}...</p>
  </div>
  <div className='card-action'>
    <Link to={`/category/${strCategory}`} className='btn'>Wathch category</Link>
  </div>
</div>
  
}
