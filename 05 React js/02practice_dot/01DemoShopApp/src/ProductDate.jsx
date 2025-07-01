import React from 'react';
import './ProductDate.css';

const ProductDate = (props) => {
  const dateObj = new Date(props.date); // Safe conversion
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const year = dateObj.getFullYear();

  return (
    <div className='product-date'>
      <div className='product-date__month'>{month}</div>
      <div className='product-date__year'>{year}</div>
      <div className='product-date__day'>{day}</div>
    </div>
  );
};

export default ProductDate;
