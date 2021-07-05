import React from 'react';
const SelectedProducts = ({products,value}) =>{
  return(
    <main>
    <div className="products">
    {products.filter(product =>product.category === value).map((product)=>( 
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title}/>
        <p>{product.description}</p>   
        </div>
        
    ))}
</div>
</main>
  );
}

export default SelectedProducts;