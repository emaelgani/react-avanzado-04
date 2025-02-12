import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'passwordring';
    placeholder?: string;
    [x: string]: any; //permite añadir cualquier parámetro opcional
}

export const MyTextInpunt = ({label, ...props}: Props) => {

    const [field, metadata] = useField(props)

    //metadata dice si fue tocado, si tiene valor, etc..
    //console.log(metadata)
    //console.log(field)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} />
            <ErrorMessage name={props.name} component="span"/>
            {/* {
                metadata.touched && metadata.error && (
                    <span className="error"> {metadata.error} </span>
                )
            } */}
        </>
    )
}
