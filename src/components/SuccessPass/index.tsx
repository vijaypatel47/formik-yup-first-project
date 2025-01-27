import {Link} from 'react-router-dom'
const SuccessPass: React.FC = () => {

    return(
      <div className="h-screen w-full bg-black flex flex-col items-center p-10 lg:text-lg">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="bg-gray-800 rounded-md flex flex-col items-center justify-center px-10 py-10 my-5 w-[100%] md:w-[80%] lg:w-[35%] xl:[30%] h-[550px]">
                <img src="https://res.cloudinary.com/drgheojrx/image/upload/v1721393136/Group_207_yfuxcm.png" alt="suces" className='h-[200px] w-[200px] mb-7'/>
                <h1 className="text-gray-200 font-bold text-lg m-5 ">Login Success!!</h1>
                <button type="button" className="my-5 py-2 px-10 rounded-2xl bg-gray-500 text-gray-200 hover:bg-purple-500"><Link to="/">Continue</Link></button>
            </div>
          </div>
        </div>
    )


}

export default SuccessPass

