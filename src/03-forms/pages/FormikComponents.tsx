import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikComponents = () => {



    return (
    <div>
        <h1>Formik Components</h1>
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
                        <label htmlFor="firstName">First Name</label>
                        <Field  name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field  name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="emailAddress">Email Address</label>
                        <Field  name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="description">Message</label>
                        <Field  name="desc" as="textarea" />
                        <ErrorMessage name="desc" component="span" />

                        <label htmlFor="jobType">Job type</label>
                        <Field name="jobType" as="select">
                            <option value="">Check something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-jr">IT Jr </option>
                            <option value="it-senior">IT Senior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field  name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )
            }

        </Formik>

    
    </div>
    )
}
