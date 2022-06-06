import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { InitialValues, onChangeArgs, Product, ProductCartHandlers, ProductContextProps } from '../interfaces/interfaces';
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: ( args: ProductCartHandlers ) => JSX.Element
    className?:string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?:number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxQuantity, isMaxQuantityReached, reset } = useProduct({ 
        onChange, 
        product,
        value,
        initialValues
    });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxQuantity
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxQuantityReached,
                    maxQuantity,
                    product,
                    increaseBy,
                    reset 
                })}
            </div>
        </Provider>
    )
}




