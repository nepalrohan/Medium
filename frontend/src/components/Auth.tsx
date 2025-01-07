import { Link, useNavigate } from "react-router-dom"
import {useState} from 'react';
import { SignupInput } from "@rohan002/mytypes";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({type}:{type:"signup" | "signin"}) => {
const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name:"",
    email:"",
    password:""
  })








  async function  sendRequest () {
    try {
  const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup'? "signup":"signin"}`, postInputs)
      const jwt = response.data.jwt;
      localStorage.setItem("token", "Bearer"+" "+jwt);
      navigate('/blogs')
    } catch (error) {
      console.log(error)
    }
}




  return (
    <div className=' h-screen flex justify-center items-center flex-col w-full '>

<div className='text-2xl font-extrabold'>
{type ==="signup"? "Create an account" : "Signin to your account"}

</div>
<div className='text-slate-500 mb-4'>
{type ==="signup"? "Already have an account?" : "Don't have an account?"}   <Link className='pl-1 text-blue-600 font-semibold underline' to={type ==="signup"? "/signin" : "/signup"}>{type ==="signup"? "SignIn" : "SignUp"}</Link>
</div>
<LabelledInput label="Email"  type='email'  placeholder="Enter your email"  onChange={(e)=>{
setPostInputs(
  {
   ...postInputs,
    email:e.target.value
  }
)
}} />

<LabelledInput label="Password" type='password'  placeholder="Enter your password"  onChange={(e)=>{
setPostInputs(
  {
   ...postInputs,
    password:e.target.value
  }
)
}} />


{type ==="signup" ?
<LabelledInput  label="Fullname" type='text'  placeholder="Enter your fullname"  onChange={(e)=>{
setPostInputs(
  {
   ...postInputs,
    name:e.target.value
  }
)
}} />:null}

<button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 w-1/2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signup"? "Sign Up" : "Sign In"}</button>
    </div>
  )
}

export default Auth









interface labelledInputType {
  label:string;
  placeholder:string;
 
  onChange:(e:any)=>void;
  type?:string;
}


function LabelledInput({label, placeholder, onChange, type}:labelledInputType){
  return <div className='mt-2  w-1/2 '>
  <label  className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">{label}</label>
  <input
  onChange={onChange}
  type={type} id="first_name" className="bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>
}



