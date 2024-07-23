import * as Yup from 'yup'

export const RegistrationSchemas = Yup.object({
email: Yup.string().email().required("Please enter your valid email ID"),
password: Yup.string().min(5).required("password should be at least 5 characters long") 
}) 

export const LoginSchemas = Yup.object({
    email: Yup.string().email().required("Please enter your valid email ID"),
    password: Yup.string().min(5).required("password should be at least 5 characters long")
    })