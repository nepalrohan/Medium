import { Link } from "react-router-dom"

const Auth = ({type}:{type:"signup" | "signin"}) => {
  return (
    <div className=' h-screen flex justify-center items-center flex-col '>

<div className='text-2xl font-extrabold'>
    Create an account

</div>
<div className='text-slate-500'>
    Already have an account? <Link className='pl-1 text-blue-600' to='/signin'>login</Link>
</div>

    </div>
  )
}

export default Auth




