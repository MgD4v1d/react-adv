import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const {shoppingCart, onProductQuatityChange} = useShoppingCart();


  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>

            {
                products.map(product => (
                    <ProductCard
                        key={product.id} 
                        product={ product }
                        className="bg-dark text-white"
                        onChange={ onProductQuatityChange }
                        value={shoppingCart[product.id]?.quantity || 0 }
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold"/>
                        <ProductButtons 
                            className="custom-buttons"
                            
                        />
                    </ProductCard>
                ))
            }
    
        </div>

        <div className="shopping-cart">
            
            {
                Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={ product }
                        className="bg-dark text-white"
                        style={{ width: '100px'}}
                        onChange={ onProductQuatityChange }
                        value={product.quantity}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" style={{fontSize: '10px'}}/>
                        <ProductButtons 
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard>
                ))
            }            
           
        </div>

    </div>
  )
}
