import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any; //permite añadir cualquier parámetro opcional
}

export const MySelect = ({label, ...props}: Props) => {

    const [field, metadata] = useField(props)

    //metadata dice si fue tocado, si tiene valor, etc..
    //console.log(metadata)
    //console.log(field)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span"/>
            
            {/* {
                metadata.touched && metadata.error && (
                    <span className="error"> {metadata.error} </span>
                )
            } */}
        </>
    )
}
