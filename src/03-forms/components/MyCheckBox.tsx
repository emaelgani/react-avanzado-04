import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; //permite añadir cualquier parámetro opcional
}

export const MyCheckBox = ({label, ...props}: Props) => {

    const [field, metadata] = useField({...props, type: 'checkbox'});

    //metadata dice si fue tocado, si tiene valor, etc..
    //console.log(metadata)
    //console.log(field)

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props}></input>
                {label}
            </label>
            <ErrorMessage name={props.name} component="span"/>
            
            {/* {
                metadata.touched && metadata.error && (
                    <span className="error"> {metadata.error} </span>
                )
            } */}
        </>
    )
}
