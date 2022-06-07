import { ChangeEvent, useState } from 'react';



export const useForm =<T>(initState:T) => {

    const [formValues, setFormValues] = useState(initState);
    
      const onChangeRegister = ({target}:ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
          ...prev,
          [target.name]: target.value,
        }));
      }
      

      const resetFormValues =  () => {
          setFormValues({...initState})
      }
      
      const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formValues,
        formValues,

        onChangeRegister,
        isValidEmail,
        resetFormValues
    }
}