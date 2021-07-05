import React from 'react'

const AllProducts = ({products}) => {
    return (
       <div className="allProducts">
       {products.map((product)=>( 
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title}/>
        <p>{product.description}</p>   
        </div>
       ))}
    </div> 
    )
}
 export default AllProducts;