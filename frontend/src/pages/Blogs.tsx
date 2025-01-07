import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import {BlogSkeleton} from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {

  const {loading, blogs} = useBlogs();
  if(loading){
    return <div className='w-1/2 mx-auto flex flex-col gap-1 r'>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
    </div>
  }
  return (
    <div>
    <AppBar/>
    <div className='flex justify-center'>
        <div className='flex flex-col justify-center max-w-xl '>


{
  blogs.map((blog)=>{
    return <BlogCard 
    id={blog.id}
    authorName={blog.author.name}
    title={blog.title}
    content={blog.content || "Anonymous"}
    publishedDate={"2nd Feb 2024"}
    />
  })
}







    </div>
    </div>
    </div>
  )
}

export default Blogs


