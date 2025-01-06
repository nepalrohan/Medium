
import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import {withAccelerate} from '@prisma/extension-accelerate';
import { verify } from "hono/jwt";
import { verifyuser } from "../middleware/auth";


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL:string,
      JWT_SECRET:string
    },
    Variables:{
      userId:string,
    }
  }>();




  blogRouter.use('/*', verifyuser )



  blogRouter.post('/', async (c)=>{

    const body =await  c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
try {
  const blog =  await prisma.post.create({
    data:{


      title:body.title,
      content:body.content,
      authorId:userId, // replace with actual user id


    }
  })

return c.json({
  id:blog.id
});
} catch (error) {
  c.status(411);
  return c.text('Failed during adding post')
  
}
    
  })
  
  blogRouter.put('/', async (c)=>{
    const body =await c.req.json();
    
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  

    try {
      const blog =  await prisma.post.update({
        where:{
         id:body.id
        },
        data:{
         title:body.title,
         content:body.content
        }
       })
     
     return c.json({
       id:blog.id
     });
 
    } catch (error) {
      c.status(411);
      return c.text('Failed during updating post')
    }


  })
  






  blogRouter.get('/bulk', async (c)=>{

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());



    const blogs = await prisma.post.findMany();
    return c.json({
      blogs
    })

  })
  










  
  blogRouter.get('/', async (c)=>{
    const body =await  c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  

    try {
      const blog =  await prisma.post.findFirst({
        where:{
          id:body.id
        }
      })
    
    return c.json({
      blog
    });
    } catch (error) {
      c.status(411);
      return c.text('Failed during fetching post')
    }
  
  })
  