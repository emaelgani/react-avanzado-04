import '../styles/styles.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';


export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                            .min(2, 'El nombre debe tener como mínimo 2 caracteres')
                            .max(15, 'El nombre debe tener como máximo 15 caracteres')
                            .required('El nombre es requerido'),
                email: Yup.string()
                            .email('Debe ser un email válido')
                            .required('El email es requerido'),
                password1: Yup.string()
                            .required('La password es requerida'),
                password2: Yup.string()
                                .required('La password es requerida')
                                .test({test: (values, context: Yup.TestContext<Yup.AnyObject>) => values === context.parent.password1, message: 'Las contraseñas deben ser iguales'})
            })} 
            >

                {({handleReset}) => (
                    <Form noValidate>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name="name"/>
                        <ErrorMessage name='name' component="span"/>

                        <label htmlFor='name'>Email</label>
                        <Field type='email' name="email"/>
                        <ErrorMessage name='email' component="span"/>

                        <label htmlFor='password1'>Password</label>
                        <Field type='password' name="password1"/>
                        <ErrorMessage name='password1' component="span"/>

                        <label htmlFor='password2'>Password</label>
                        <Field type='password' name="password2"/>
                        <ErrorMessage name='password2' component="span"/>


                        <button type='submit'>Submit</button>
                        <button type='button' onClick={handleReset}>Reset</button>
                    </Form>

                )}
              
            </Formik>

        </div>
    )
}
