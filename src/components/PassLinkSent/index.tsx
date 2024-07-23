import {Link} from 'react-router-dom'
const PassLinkSent: React.FC = () => {

    return(
      <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10 lg:text-lg">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
            <div className="bg-gray-800 rounded-md flex flex-col items-center justify-center px-10 py-10 my-5 w-[100%] md:w-[80%] lg:w-[35%] xl:[30%] h-[550px]">
                <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721393464/email_imgfhb.png" alt="email" className='h-[200px] w-[200px] my-7'/>
                <h1 className="text-gray-200 font-bold text-lg mt-5">Sent!!</h1>
                <p className="text-gray-500 py-3">A passwrod reset link has been sent to your email. please click on the link to reset password.</p>
                <button type="button" className="my-5 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/enter-new-pass">Go to Login</Link></button>
            </div>
          </div>
        </div>
    )

}

export default PassLinkSent

