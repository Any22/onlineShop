import React,{ useState, useEffect }  from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import { NavBar } from '../Components/NavBar';
import Loading from '../Components/Loading';
import AllProducts from '../Components/AllProducts';
import SelectedProducts from '../Components/SelectedProducts';


const ProductsPage = () => {
const url='https://fakestoreapi.com/products'; 
const [loading, setLoading] = useState(true);
const [products, setProducts] = useState([]);
const [selectProducts,setSelectProducts]=useState([]);
const [selectCategory,setSelectCategory]=useState([]); 
const [selection,setSelection]=useState(false);


useEffect(() => {  
    /////////////////1. Fetching the data form API//////////////////////////////////////////////////////////////////////////
    const fetchProducts = async () => {
      setLoading(true);
      try{
        const response = await fetch(url);
        const products = await response.json();
        setLoading(false);
        setProducts(products);
        filterData(products);
    /////////////////2.stopping the user interact with dropdown while list are loading/////////////////////////////////////
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchProducts();
    },[]);
 //3.Made a function to remove repeat occurance of the product category so unique categories can be picked only///
    function filterData(products){
        let selectOptions= [...new Set(products.map(product=>product.category))];
        console.log(selectOptions);
        setSelectProducts(selectOptions);
        }
        
        function handleProductList(e){
        setSelection(false);
        }
        function handleProductSelect(e){
        console.log("Selected Product", e.target.value);
        setSelectCategory(e.target.value);
        setSelection(true);
        }
        if (loading)
{
  return(
    <main>
      <Loading/>
    </main>
    );
}

 if (!selection){
 return(
   <Router>  
   <main>
     <div className="mainApp">
     {/* <button onClick={e => handleProductList(e)}>All Products</button> */}
     <select onChange={e => handleProductSelect(e)}>
      {selectProducts.map((selectProduct) => (
       <option key={selectProduct} value={selectProduct}>{selectProduct}</option>
      ))}
    </select>
      <AllProducts products={products}/>
  </div>
  </main> 
  </Router>
 );
}
   return(
     <Router>
   <main>   
     <div className="mainApp">
     <button onClick={e => handleProductList(e)}>All Products</button>
     <select onChange={e => handleProductSelect(e)}>
      {selectProducts.map((selectProduct) => (
       <option key={selectProduct} value={selectProduct}>{selectProduct}</option>
      ))}
    </select>
    <div className="filteredProducts">
      <SelectedProducts products={products} value={selectCategory}/>
    </div>
   </div>
  </main>
  </Router>
); 
        

}
export default ProductsPage;