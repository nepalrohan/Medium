

interface BlogCardProps {
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}
const BlogCard = ({authorName, title, content, publishedDate}:BlogCardProps) => {
  return (
    <div className='p-4 border-b-2 border-slate-200 bg-slate-100 mt-1'>

<div className='flex gap-2 items-center'>
<Avatar name={authorName}/>
<div className='font-extralight '>

{authorName}  

</div>
<div className="text-xs text-slate-400">
    &#9679;
</div>
<div className=' font-extralight text-sm flex items-center text-green-600'>
{publishedDate}
</div>
</div>
<div className='text-xl font-semibold mt-2'>
    {title}
</div>
<div className='font-thin text-sm text-slate-500'>
    {content.slice(0,300)+ "..."}
</div>

<div className='font-thin text-sm text-slate-600 mt-2'>
 {`${Math.ceil(content.length/100)} minutes to read`}
</div>

    </div>
  )
}

export default BlogCard





export function Avatar ({name}:{name:string}){
     return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-800 rounded-full dark:bg-gray-600">
     <span className=" text-gray-200 font-bold dark:text-gray-300">{name[0]}</span>
 </div>
}