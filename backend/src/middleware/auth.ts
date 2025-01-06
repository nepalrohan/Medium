import { verify } from "hono/jwt";


//@ts-ignore


export const verifyUser = async (c, next)=>{

    try {
        const header = c.req.header("authorization") || "";
        const token = header.split(" ")[1];
      const response = await verify (token, c.env.JWT_SECRET);
      
      
      
      if(response.id){
        //@ts-ignore
        c.set("userId", response.id);
        await next()
      }else{
        c.status(403)
        return c.json({message:"Unauthorized"})
      }
    } catch (error) {
        c.status(403)
        return c.json({message:"Error during verification"})
    }
   
  

  }