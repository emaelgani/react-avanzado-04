import '../styles/styles.css'
import * as Yup from 'yup';
import { useFormik} from 'formik';


export const FormikYupPage = () => {

    const { getFieldProps, handleSubmit, errors, touched } = useFormik({
        initialValues: {    
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
            email: Yup.string()
                        .email('Email no tiene un formato válido')
                        .required('Requerido')
        })

    })

    return (
        <div>
            <h1>Formik Yup </h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    //name='firstName'
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.firstName}
                    //Para evitar los 4 campos:
                    {...getFieldProps('firstName')}
                />

                {touched.firstName && errors.firstName &&  <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    {...getFieldProps('lastName')}

                />

                { touched.lastName && errors.lastName &&  <span>{errors.lastName}</span>}

            

                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    {...getFieldProps('email')}

                />
                { touched.email && errors.email &&  <span>{errors.email}</span>}


                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
