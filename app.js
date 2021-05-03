import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/',async function(request,response){
    return {"message": "Hello world!"}
})

fastify.post('/send',async function(request,response){
    return {"success":{"data":request.body}}
})

fastify.listen(3000, ()=>{
    console.log('Your app is running on 3000 port');
})