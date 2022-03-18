import './App.css';
import mars from './assets/product-mars.png'
import bomba from './assets/product-bomba.png'
import snickers from './assets/product-snickers.png'
import Product from './Product';


const products = [
  {
    id: 11,
    product: snickers,
    stock: 3
  },
  {
    id: 12,
    product: "",
    stock: 0
  },{
    id: 13,
    product: bomba,
    stock: 3
  },{
    id: 14,
    product: "",
    stock: 0
  },{
    id: 15,
    product: "",
    stock: 0
  },{
    id: 21,
    product: "",
    stock: 0
  },{
    id: 22,
    product: mars,
    stock: 3
  },{
    id: 23,
    product: snickers,
    stock: 3
  },{
    id: 24,
    product: "",
    stock: 0
  },{
    id: 25,
    product: "",
    stock: 0
  },{
    id: 31,
    product: "",
    stock: 0
  },{
    id: 32,
    product: "",
    stock: 0
  },{
    id: 33,
    product: bomba,
    stock: 3
  },{
    id: 34,
    product: snickers,
    stock: 3
  },{
    id: 35,
    product: "",
    stock: 0
  },{
    id: 41,
    product: mars,
    stock: 3
  },{
    id: 42,
    product: mars,
    stock: 3
  },{
    id: 43,
    product: "",
    stock: 0
  },{
    id: 44,
    product: "",
    stock: 0
  },{
    id: 45,
    product: "",
    stock: 0
  },{
    id: 51,
    product: "",
    stock: 0
  },{
    id: 52,
    product: "",
    stock: 0
  },{
    id: 53,
    product: mars,
    stock: 3
  },{
    id: 54,
    product: "",
    stock: 0
  },{
    id: 55,
    product: "",
    stock: 0
  }
]

function App() {
  return (
    <div className="App">
      <div className='vendor'>
        <div className='product-display'>
        {products.map((elem) => 
          <Product 
            elem={elem}  
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
