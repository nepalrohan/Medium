import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const AppBar = () => {
  return (
    <div className='border-b flex justify-between px-10 items-center h-16 mb-2'>
<div className='font-bold text-xl'>Medium</div>
<div className='flex items-center gap-3 '>

  <Link to ='/publish'>
<button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2  py-3 text-center me-2 mb-2">Add Blog</button></Link>
    <Avatar name="Rohan" />
</div>
    </div>
  )
}

export default AppBar