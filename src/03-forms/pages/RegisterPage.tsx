import { FormEvent } from 'react';

import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage= () => {

  const {
    formValues, 
    onChangeRegister, 
    resetFormValues,
    isValidEmail,
    name,email, 
    password1, 
    password2
  } = useForm({
    name:'',
    email:'',
    password1: '',
    password2: '',
  });


  const handleSubmit = (event:FormEvent<HTMLElement>)=> {
    event.preventDefault();
  }

  return (
    <div>
        <h1>Register Page</h1>
        <hr/>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            autoComplete="off"
            value={name}
            name="name"
            onChange={onChangeRegister}
            className={`${(name.trim().length <= 0) && 'has-error' }`} 
          />
          { (name.trim().length <= 0) && <span>Este campo es obligatorio</span>}

          <input
            type="email"
            placeholder="Email"
            name='email'
            value={email}
            onChange={onChangeRegister}
            className={`${(!isValidEmail(email)) && 'has-error' }`}
          />
          { (!isValidEmail(email)) && <span>El email no es valido</span>}

          <input
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={onChangeRegister} 
          />
          { (password1.trim().length <= 0) && <span>Este campo es obligatorio</span>}
          { (password1.trim().length < 6) && password2.trim().length > 0 && <span>La contraseña debe terner 6 caracteres</span>}
          <input
            type="password"
            placeholder="Comfirm password"
            name="password2"
            value={password2}
            onChange={onChangeRegister}  
          />
          { (password2.trim().length <= 0) && <span>Este campo es obligatorio</span>}
          { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no son iguales</span>}

          <button
            type="submit"
          >Register</button>
          <button
            type="button"
            onClick={resetFormValues}
          >Reset</button>

        </form>

    </div>
  )
}
