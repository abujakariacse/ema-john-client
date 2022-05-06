import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts();

    const [cart, setCart] = useCart(products);

    function addToCart(product){
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   <Link to="/order">
                       <button>Review Order</button>
                   </Link>
                   </Cart> 
            </div>
           
        </div>
    );
};

export default Shop;