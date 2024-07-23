import { useState } from "react"
import {Link} from 'react-router-dom'
const PasswordReset: React.FC = () => {

    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
      };

    return(
      <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
          <div className="bg-gray-800 rounded-md justify-start pl-5 pr-10 py-10 my-5 w-[100%] md:w-[60%] lg:w-[33%] xl:[30%] h-[500px]">
                <h1 className="text-gray-200 font-bold text-lg">Password Reset</h1>
                <p className="text-gray-500 py-2">Please enter your registerd email</p>
                <form className="h-[340px] flex flex-col" onSubmit={handleSubmit}>
                    <div className="my-10">
                        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Email address" className="outline-none bg-transparent text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                    </div>
                    <button type="submit" className="mb-5 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/reset-link">Continue</Link></button>
                </form>
            </div>
          </div>
        </div>
    )


}

export default PasswordReset

