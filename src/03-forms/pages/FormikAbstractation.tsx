import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {MyTextInput, MyTextAreaInput, MySelectInput, MyCheckboxInput} from '../components';

import '../styles/styles.css';


export const FormikAbstractation = () => {

    return (
    <div>
        <h1>Formik Abstractation</h1>
        <hr />

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
                desc: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    lastName: Yup.string()
                                .max(8, 'Debe de ser de menos de 8 caracteres')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('El email no es valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                .required('Requerido')
                }
            )}
        >

            {
                (formik) => ( 
                    <Form>

                        <MyTextInput 
                            label="First name" 
                            name="firstName"
                            placeholder="* First name" 
                        />

                        <MyTextInput 
                            label="Last name" 
                            name="lastName"
                            placeholder="* Last name" 
                        />

                        <MyTextInput 
                            label="Email address" 
                            name="email"
                            placeholder="* Email"
                            type="email" 
                        />

                        <MyTextAreaInput
                            label="Description"
                            name="desc" 
                        />

                        <MySelectInput label="Job type" name="jobType">
                            <option value="">Check something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-jr">IT Jr </option>
                            <option value="it-senior">IT Senior</option>
                        </MySelectInput>

                        <MyCheckboxInput
                            label="Terms  & Conditions"
                            name="terms"
                         />

                        <button type="submit">Submit</button>
                    </Form>
                )
            }

        </Formik>

    
    </div>
    )
}
