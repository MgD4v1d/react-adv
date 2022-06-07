import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( values:FormValues ) => {
        
        const errors:FormikErrors<FormValues> = {};

        if(!values.firstName){
            errors.firstName = 'First name is required';
        }else if(values.firstName.length >= 15){
            errors.firstName = "Must be 15 characters or less"
        }

        if(!values.lastName){
            errors.lastName = 'Last name is required';
        }else if(values.lastName.length >= 8){
            errors.lastName = "Must be 8 characters or less"
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

    return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <hr />

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                name="firstName"
                placeholder="* First name"
                autoComplete="off"
                value={ values.firstName }
                onChange={handleChange}
                onBlur={handleBlur}
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name="lastName"
                placeholder="* Last name"
                autoComplete="off"
                value={ values.lastName }
                onChange={handleChange}
                onBlur={handleBlur} 
            />

            { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

            <label htmlFor="emailAddress">Email Address</label>
            <input 
                type="email"
                name="email" 
                placeholder="* Email"
                value={ values.email }
                onChange={ handleChange }
                onBlur={ handleBlur }
            />
            { touched.email && errors.email && <span>{errors.email}</span> }

            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    </div>
    )
}
