import { Avatar } from "./BlogCard"

const AppBar = () => {
  return (
    <div className='border-b flex justify-between px-10 items-center h-12 mb-2'>
<div className='font-bold text-xl'>Medium</div>
<div>
    <Avatar name="Rohan" />
</div>
    </div>
  )
}

export default AppBar