import {Formik, Form} from 'formik'
import { MySelectInput, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

//  console.log(formJson);

const initialValues: {[key:string]:any} = {};

const requiredFields: {[key:string]: any} = {};

for (const input of formJson) {

    initialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres`)
        }

        if(rule.type === "email"){
            schema = schema.email('El email no es valido');
        }

        //....otras reglas
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>
        <hr/>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values)=> {
                console.log(values);
            }}
        >
            {({handleReset}) => (
                <Form noValidate>
                    
                    {
                        formJson.map(({type, name, placeholder, label, options}) => {

                            if(type === 'text' || type === 'password' || type === 'email'){
                                return <MyTextInput
                                            key={name} 
                                            type={(type as any)} 
                                            name={name} 
                                            label={label} 
                                            placeholder={placeholder} 
                                        />
                            }else if (type === 'select'){
                                return (
                                    <MySelectInput
                                        key={name}
                                        label={label}
                                        name={name}
                                    >

                                        <option value="">Select an options</option>

                                        {
                                            options?.map(({id, name}) => (
                                                <option key={id} value={id}>{name}</option>
                                            ))
                                        }

                                    </MySelectInput>
                                )
                            }

                            throw new Error(`El type: ${type} no es soportado`);
                        })
                    }

                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </Form>
            )}
        </Formik>

    </div>
  )
}
