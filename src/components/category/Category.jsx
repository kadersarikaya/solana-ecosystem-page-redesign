import React from 'react'
import './category.scss';
const Category = ({img, title, num}) => {
  return (
    <div className='sol__category__component'>
      <div className="sol__category__component-content">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{num}</p>
      </div>
    </div>
  )
}

export default Category