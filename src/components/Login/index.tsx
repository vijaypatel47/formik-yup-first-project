import {Link} from 'react-router-dom'
import {useFormik } from "formik"
import {LoginSchemas} from '../Schemas'

const initialValues = {
    email:'',
    password:''
}
const Login: React.FC = () => {

    const {errors, values, handleBlur,touched, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:LoginSchemas,
        onSubmit:(values) => {
            console.log(values)
        }
    })



    return(
        <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10 lg:text-lg">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
            <div className="bg-gray-800 rounded-md justify-start px-10 py-10 my-5 w-[100%] md:w-[60%] lg:w-[33%] xl:[30%] h-[550px]">
                <h1 className="text-gray-200 font-bold">Sign In</h1>
                <p className="text-gray-500 py-2">Already have account? <span className="text-green-300"><Link to="/">Sign Up</Link></span></p>
                <form className="h-[370px] flex flex-col overflow-y-scroll" onSubmit={handleSubmit}>
                    <div className="mt-10 pr-10">
                        <input type="email" name="email" value={values.email} autoComplete='off' onChange={handleChange} onBlur={handleBlur} placeholder="Email address" className="bg-transparent outline-none text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                        {errors.email && touched.email ? <p className="text-red-500">{errors.email}</p> : null }
                    </div>
                    <div className="mt-10 pr-10">
                        <input type="password" name="password" value={values.password} autoComplete='off' onChange={handleChange} onBlur={handleBlur} placeholder="Password" className="bg-transparent outline-none  text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                        {errors.password && touched.password ? <p className="text-red-500 ">{errors.password}</p> : null }
                    </div>
                    <p className="flex self-end text-gray-500 cursor-pointer mb-8 mr-10"><Link to="/password-reset">Forget password?</Link></p>
                    <button type="submit" className="mb-5 py-2 px-10 rounded-2xl mr-10 bg-gray-500 text-gray-200 hover:bg-purple-500">Continue</button>
                    <div className="flex items-center space-x-4 mt-3 pr-10">
                        <hr className="flex-1 text-gray-300"/>
                        <p className="text-gray-300">Or</p> 
                        <hr className="flex-1 text-gray-300"/> 
                    </div>
                    <button className="flex items-center justify-center bg-gray-200 px-22 py-2 rounded-2xl mr-10 my-5 w-360">
                        <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1716277568/Icon_1_bql9hh.png" alt="google" className="w-4 h-4 mr-2"/> Signup with Google
                    </button>
                    <button className="flex items-center justify-center bg-gray-200 px-22 py-2 rounded-2xl mr-10 w-360">
                        <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1716277559/Icon_g4nryt.png" alt="facebook" className="w-4 h-4 mr-2"/> Signup with Facebook
                    </button>
                </form>
            </div>
          </div>
        </div>
    )


}

export default Login

