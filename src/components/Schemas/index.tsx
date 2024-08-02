import * as Yup from 'yup'

export const RegistrationSchemas = Yup.object({
username: Yup.string().email().required("Please enter your valid email ID"),
password: Yup.string().min(5).required("password should be at least 5 characters long"),
age: Yup.number().required("Please enter your age"),
address: Yup.string().min(10).required("Please enter full address"),
}) 

export const LoginSchemas = Yup.object({
    username: Yup.string().email().required("Please enter your valid email ID"),
    password: Yup.string().min(5).required("password should be at least 5 characters long")
    })