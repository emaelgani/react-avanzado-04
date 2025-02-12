import { Formik, Form } from 'formik';
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInpunt} from '../components/';


export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Components </h1>

            <Formik 
                initialValues={{    
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                .email('Email no tiene un formato válido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .isTrue('Debe de aceptar las condiciones.')!,
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                .required('Requerido')
                })}
            
            >
                {(formik) => (
                    <Form noValidate>

                        <MyTextInpunt 
                            label='First Name' 
                            name='firstName' 
                            placeholder='Ingrese su nombre'
                        />

                        <MyTextInpunt 
                            label='Last Name' 
                            name='lastName' 
                            placeholder='Ingrese su apellido'
                        />

                        <MyTextInpunt 
                            label='Email' 
                            name='email' 
                            placeholder='Ingrese su correo'
                            type='email'
                        />
                        
                        <MySelect label='Job Type' name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">It Jr.</option>
                        </MySelect>

                        <MyCheckBox label='Terms and conditions' name='terms' />


                        <button type='submit'>Submit</button>
                    </Form>
                )}

            </Formik>

            


        </div>
    )
}
