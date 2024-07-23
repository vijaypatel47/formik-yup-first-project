import { useState } from "react"
import {Link} from 'react-router-dom'
const OtpVerify: React.FC = () => {

    const [otp, setOtp] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('OTP:', otp);
        
      };

    return(
        <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
            <div className="bg-gray-800 rounded-md flex flex-col  justify-start pl-5 pr-10 py-10 my-5 w-[100%] md:w-[60%] lg:w-[33%] xl:[30%] h-[500px]">
                <h1 className="text-gray-200 font-bold">Verification</h1>
                <p className="text-gray-500 py-2">We will be sending 5 digit one time password (OTP) on your emial. Please enter to verify.</p>
                <form className="h-[340px] flex flex-col" onSubmit={handleSubmit}>
                    <div className="mt-10">
                        <input type="text" value={otp} onChange={(e) =>setOtp(e.target.value)} placeholder="Enter OTP" className="bg-transparent outline-none text-gray-500" />
                        <hr className="w-360 h-1 text-gray-300"></hr>
                    </div>
                    <p className="flex self-end text-gray-500 cursor-pointer mb-8"><Link to="/">Time: 00: 04</Link></p>
                    <button type="submit" className="mb-5 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/success-email">Continue</Link></button>
                    <p className="text-gray-500 py-2 text-center">Didn't received the OTP?  <span className="text-green-300">Resend</span></p>
                </form>
            </div>
          </div>
        </div>
    )


}

export default OtpVerify

