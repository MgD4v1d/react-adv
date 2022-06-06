import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


export interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?:number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.quantity || value );
    const isMounted = useRef(false);

    const increaseBy = (value:number) => {

        let newValue = Math.max(counter + value, 0);

        if(initialValues?.maxQuantity){
            newValue = Math.min(newValue, initialValues.maxQuantity);
        }

        setCounter(newValue);
        
        onChange && onChange({quantity: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.quantity || value);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);

    }, [value]);


    return {
        counter,
        increaseBy,
        reset,
        
        isMaxQuantityReached: !!initialValues?.quantity && initialValues.maxQuantity === counter,
        maxQuantity: initialValues?.maxQuantity
    }

}