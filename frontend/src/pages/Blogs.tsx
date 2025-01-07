import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks";

const Blogs = () => {

  const {loading, blogs} = useBlogs();
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
    <AppBar/>
    <div className='flex justify-center'>
        <div className='flex flex-col justify-center max-w-xl '>


{
  blogs.map((blog)=>{
    return <BlogCard 

    authorName={blog.author.name}
    title={blog.title}
    content={blog.content || "Anonymus"}
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


