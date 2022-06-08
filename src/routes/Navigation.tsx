import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';


import {
    DynamicFormPage,
    FormikAbstractation, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage, 
    RegisterFormikPage, 
    RegisterPage,
} from '../03-forms/pages'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
            
                <ul>
                    <li>
                        <NavLink to="/formik-dynamic" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik Form dynamic </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-register" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik Form register </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abtractation" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik Abstractation </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik Components </NavLink>
                    </li>
                    <li>
                        <NavLink to="/form-yup-formik" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik & Yup </NavLink>
                    </li>
                    <li>
                        <NavLink to="/form-basic-formik" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Uso de Formik Basico</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register-tradicional" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Register Tradicional</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : '' } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="formik-dynamic" element={<DynamicFormPage />} />
                <Route path="formik-register" element={<RegisterFormikPage />} />
                <Route path="formik-abtractation" element={<FormikAbstractation />} />
                <Route path="formik-components" element={<FormikComponents />} />
                <Route path="form-yup-formik" element={<FormikYupPage />} />
                <Route path="form-basic-formik" element={<FormikBasicPage />} />
                <Route path="register-tradicional" element={<RegisterPage />} />
                <Route path="about" element={<h1>About Page</h1>} />
                <Route path="users" element={<h1>Users Page</h1>} />
                <Route path="home" element={<h1>Home Page</h1>} />

                <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
