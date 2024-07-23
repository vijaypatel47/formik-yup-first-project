import { useState } from "react"
import {Link} from 'react-router-dom'
const NewPassword: React.FC = () => {

    const [newPass, setNewPass] = useState<string>("")
    const [confirmPass, SetConfirmPass] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', newPass);
      };

    return(
        <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10 lg:text-lg">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
            <div className="bg-gray-800 rounded-md justify-start px-10 py-10 my-5 w-[100%] md:w-[80%] lg:w-[35%] xl:[30%] h-[550px]">
                <h1 className="text-gray-200 font-bold text-lg">Reset Password</h1>
                <p className="text-gray-500 py-2">Please reset your password</p>
                <form className="h-[370px] flex flex-col" onSubmit={handleSubmit}>
                    <div className="my-10">
                        <input type="email" value={newPass} onChange={(e) =>setNewPass(e.target.value)} placeholder="New Password" className="outline-none bg-transparent text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                    </div>
                    <div className="mb-10">
                        <input type="text" value={confirmPass} onChange={(e) =>SetConfirmPass(e.target.value)} placeholder="Confirm Password" className="outline-none bg-transparent text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                    </div>
                    <button type="submit" className="mt-10 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/success-password-set">Continue</Link></button>
                </form>
            </div>
          </div>
        </div>
    )


}

export default NewPassword

