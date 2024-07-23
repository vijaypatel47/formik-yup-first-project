import { useState } from 'react';
import {Link} from 'react-router-dom'
import {useFormik } from "formik"
import {RegistrationSchemas} from '../Schemas'
import { IoEye } from "react-icons/io5";

const initialValues = {
    email:'',
    password:''
}

const Registration: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    const {errors, values, handleBlur,touched, handleChange, handleSubmit,} = useFormik({
        initialValues:initialValues,
        validationSchema:RegistrationSchemas,
        onSubmit:(values) => {
            console.log(values)
            
        }
    })

    return(
        <div className="h-screen w-full bg-black flex flex-col items-center p-10 lg:text-lg">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
            <div className="bg-gray-800 rounded-md  px-10 py-10 my-5 w-[100%] md:w-[80%] lg:w-[35%] xl:[30%] h-[550px]">
                <h1 className="text-gray-200 font-bold">Registration</h1>
                <p className="text-gray-500 my-2">Already have account? <span className="text-green-300"><Link to="/login">Sign In</Link></span></p>
                <form className="h-[370px] flex flex-col overflow-y-scroll" onSubmit={handleSubmit}>
                    <div className="mt-10 pr-10">
                        <input type="email" name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email address" className="bg-transparent outline-none  text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                        {errors.email && touched.email ? <p className="text-[10px] md:text-[15px] text-red-500">{errors.email}</p> : null }
                    </div>
                    <div className="my-10 pr-10">
                        <div className='flex flex-row justify-between items-center'>
                        <input type={showPassword ? 'text' : 'password'} name="password" autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password" className="bg-transparent outline-none  text-gray-500" />
                        <span className="eye-icon" onClick={toggleShowPassword}>
                            {touched.password ? <IoEye className='text-gray-500 h-7 w-7'/> : ''}
                        </span>
                        </div>
                        <hr className="w-360 h-1 text-gray-300"></hr>
                        {errors.password && touched.password ? 
                            <div className="w-[70%]">
                                <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721740116/Arrow_zaajjk.png" alt="arrow" className='h-2 w-3 mx-[50%]'/>
                                <p className='w-full rounded-md bg-gray-500 text-gray-200 text-[11px] px-1 py-0 text-gray-200'>{errors.password}</p>
                            </div>
                             :
                              null 
                        }
                    </div>
                    <button type="submit" className="mb-5 py-2 px-10 mr-10 rounded-2xl bg-gray-500 text-gray-200  hover:bg-purple-500">Continue</button>
                    <div className="flex items-center space-x-4 mt-3 pr-10">
                        <hr className="flex-1 text-gray-300"/>
                        <p className="text-gray-300">Or</p> 
                        <hr className="flex-1 text-gray-300"/> 
                    </div>
                    <button  className="flex items-center justify-center bg-gray-200 mr-10 px-22 py-2 rounded-2xl my-8 w-360">
                        <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1716277568/Icon_1_bql9hh.png" alt="google" className="w-4 h-4 mr-2"/> Signup with Google
                    </button>
                    <button className="flex items-center justify-center bg-gray-200 mr-10 px-22 py-2 rounded-2xl  w-360">
                        <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1716277559/Icon_g4nryt.png" alt="facebook" className="w-4 h-4 mr-2"/> Signup with Facebook
                    </button>
                </form>
            </div>
          </div>
        </div>
    )


}

export default Registration

