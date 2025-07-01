import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
  return (
    <Card className="products">
      {props.items.map((item, index) => (
          <ProductItem 
            key={index}
            title={item.title}
            date={item.date}
          />
        ))}
    </Card>
  );
}

export default Products;