import { useState } from "react";
import AppBar from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import BlogSkeleton from "../components/BlogSkeleton";


interface BlogOnly {
    title:string;
    content:string;
}
const Publish = () => {
const [blog, setBlog] = useState<BlogOnly>({
    title: '',
    content: '',
   
  
})

const navigate = useNavigate();

const handlechange = (e:any)=>{

    setBlog({...blog, [e.target.name]: e.target.value })
   
}


console.log(blog)

async function  sendRequest () {
    try {
        
 await axios.post(`${BACKEND_URL}/api/v1/blog`, blog, {
    headers:{
        Authorization: localStorage.getItem("token")
    }
  })

      navigate('/blogs')
    } catch (error) {
      console.log(error)
    }
}



  return (

    <div>
        <AppBar/>
    <div className='w-full flex flex-col items-center'>

<div className="mb-4 p-4 w-1/2">
    <label  className="block mb-2 text-lg font-medium text-gray-900 ">Title</label>
    <input
    onChange = {handlechange}
    name='title'
     type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
</div>

<div className="mb-4 p-4 w-1/2">
    <label  className="block mb-2 text-lg font-medium text-gray-900 ">Content</label>
    <textarea
       onChange = {handlechange}
       name='content'
    rows={10}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
</div>


<button
type='submit'
onClick={sendRequest}
 className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
    </div>
    </div>
  )
}

export default Publish