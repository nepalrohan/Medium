import AppBar from "./AppBar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
const FullBlog = ({blog}:{blog:Blog}) => {
  return (
    <div>
        <AppBar/>
    <div className='grid grid-cols-12 px-10 w-1/2 mx-auto gap-5 '>
<div className='col-span-9 border-r-2 p-3'>
<div className='text-2xl font-semibold mt-2'>
    {blog.title}
</div>
<div className='font-thin text-justify text-sm text-slate-500'>
    {blog.content}
</div>
</div>
<div className='col-span-3'>
<div className='flex flex-col  gap-2 h-full items-center justify-center'>
<Avatar name={blog.author.name}/>
<div className='fle flex-col  '>
<div className='font-extralight '>

{blog.author.name}  

</div>

<div className=' font-extralight text-sm flex items-center text-green-600'>
2nd Feb, 2024
</div>
</div>
</div>
</div>

    </div>
    </div>
  )
}

export default FullBlog