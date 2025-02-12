import { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'


export const RegisterPage = () => {

    const {onChange, reset, isValidEmail, name, email, password1, password2} = useForm(
        {
            name: '',
            email: '',
            password1: '',
            password2: '',
    
        }
    )

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name" 
                    value={name} 
                    onChange={onChange} 
                    className={`${name.trim().length <= 0 && 'has-error'} `}
                />

                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={email} 
                    className={`${!isValidEmail(email) && 'has-error'} `}

                />

                {!isValidEmail(email) && <span>Email no válido</span>}

                <input type="password" placeholder="Password1" name="password1" value={password1} onChange={onChange}/>
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}
                
                <input type="password" placeholder="Password2" name="password2" value={password2} onChange={onChange}/>
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas deben ser iguales</span>}

                <button type="submit"> create </button>
                <button type="button" onClick={reset}> reset </button>
            </form>

        </div>
    )
}
