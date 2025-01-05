import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c)=>{
  return c.text("Hello world");
})

app.post('/api/v1/signin', (c)=>{
  return c.text('asdfa');
})


app.post('/api/v1/blog', (c)=>{
  return c.text('asdf');
})

app.post('/api/v1/blog', (c)=>{
return c.text("asdfasf")
})

app.put('/api/v1/blog', (c)=>{
  return c.text("asdfasf");
})


app.get('/api/v1/blog/:id', (c)=>{
  return c.text("asdfasdf");
})


export default app;
