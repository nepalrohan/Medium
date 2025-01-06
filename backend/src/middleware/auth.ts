import { verify } from "hono/jwt";


//@ts-ignore
export const verifyuser = async (c, next)=>{

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
  
    await next();
  }