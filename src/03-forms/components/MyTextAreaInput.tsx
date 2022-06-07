import { ErrorMessage, useField } from 'formik';

interface Props {
    label:string;
    name: string;
    placeholder?:string;
    [x:string]:any
}

export const MyTextAreaInput = ({label, ...props}:Props) => {

    const [field] = useField(props);

    return (
    <>
        <label htmlFor={props.id || props.name } >{label}</label>
        <textarea  {...field} {...props} />

        <ErrorMessage name={props.name} component="span" />

    </>
    )
}
