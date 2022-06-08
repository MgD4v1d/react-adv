import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';


export const RegisterFormikPage= () => {


  return (
    <div>
        <h1>Register Formik Page</h1>
        <hr/>

        <Formik
          initialValues={{
            name:'',
            email:'',
            password1:'',
            password2:''
          }}
          onSubmit={(values) =>{
            console.log(values)
          }}
          validationSchema={ 
            Yup.object({
              name: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .min(2,  'Debe de ser almenos de 3 caracteres')
                        .required('El nombre es requerido'),
              email: Yup.string()
                        .email('El email no es valido')
                        .required('El email es requerido'),
              password1: Yup.string()
                            .min(6, 'La contraseña debe ser de almenos 6 caracteres')
                            .required('La contraseña es requerida'),
              password2:Yup.string()
                           .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                           .required('Requerido')
                  
            })
          }
        >

          {
            ({handleReset}) => (
              <Form>

                <MyTextInput
                  label="Nombre"
                  name="name"
                  placeholder="* Nombre" 
                />

                <MyTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="* jhon@example.com" 
                />

                <MyTextInput
                  label="Password"
                  name="password1"
                  type="password"
                  placeholder="* Password" 
                />

                <MyTextInput
                  label="Confirm password"
                  name="password2"
                  type="password" 
                  placeholder="* Comfirm Password" 
                />

                <button type="submit">Register</button>
                <button type="button" onClick={handleReset}>Reset</button>

              </Form>
            )
          }

        </Formik>
       
          


    </div>
  )
}
