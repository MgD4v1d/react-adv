import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductQuatityChange = ({ quantity, product }:{quantity:number; product:Product}) => {

        setShoppingCart((oldShoppingCart) => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, quantity: 0}

            if(Math.max(productInCart.quantity + quantity, 0) > 0){
                productInCart.quantity +=  quantity;

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

                const { [product.id]:toDelete, ...rest } = oldShoppingCart;
                return rest;

            
            // if(quantity === 0){
                // const { [product.id]:toDelete, ...rest } = oldShoppingCart;
                // return {...rest}
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, quantity}
            // }

        });

    }


    return {
        shoppingCart,
        
        onProductQuatityChange
    }

}