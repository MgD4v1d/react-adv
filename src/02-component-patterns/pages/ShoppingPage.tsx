import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <ProductCard
            key={product.id} 
            product={ product }
            className="bg-dark text-white"
            initialValues={{ quantity: 4, maxQuantity: 10 }}
        >
            {
              ( {reset, count, increaseBy, isMaxQuantityReached, maxQuantity } ) => (
                <>
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons" />
                  <button onClick={reset}> Reset</button>

                  <button onClick={() => increaseBy(-2) }> -2 </button>

                  {
                    (!isMaxQuantityReached &&
                    <button onClick={ ()=> increaseBy(2) } > +2 </button>)
                  }

                  <span>{count} - {maxQuantity}</span>

                </>
              )
            }

        </ProductCard>

    </div>
  )
}
