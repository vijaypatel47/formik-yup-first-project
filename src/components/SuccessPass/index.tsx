import {Link} from 'react-router-dom'
const SuccessPass: React.FC = () => {

    return(
      <div className="h-screen w-full bg-black flex flex-col items-center align-center p-10">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721377745/Logo_ja7u1j.png" alt="logo" className="w-150 h-30 bg-transparent"/>
        <div className="bg-gray-800 rounded-md flex flex-col items-center justify-center pl-5 pr-10 py-10 my-5 w-[100%] md:w-[60%] lg:w-[33%] xl:[30%] h-[500px]">
                <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721393136/Group_207_yfuxcm.png" alt="suces" className='h-[200px] w-[200px] mb-7'/>
                <h1 className="text-gray-200 font-bold text-lg mt-5">Success!!</h1>
                <p className="text-gray-500 py-2">Your password has been updated. Please proced to the login page</p>
                <button type="button" className="mb-5 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/login">Continue</Link></button>
            </div>
          </div>
        </div>
    )


}

export default SuccessPass

