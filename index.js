const { response, request } = require('express');
const express=require('express')
const format=require('date-format')

const app = express()

const PORT=process.env.PORT  || 7070;

app.get("/",(request,response)=>{
    response.status(200).send("<h1>Hello From LCO</h1>")
});

app.get("/api/v1/instagram",(request,response)=>{
   const instaSocial={
    userName: "jagdishjagga",
    followers: 400,
    follows:500,
    date: format.asString("dd[MM] - hh:mm:ss",new Date()),
   };

   response.status(200).json( instaSocial );
});

app.get("/api/v1/facebook",(request,response)=>{
    const faceSocial={
     userName: "jagdishjagga",
     followers: 500,
     follows:700,
     date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
 
    response.status(200).json( faceSocial );
 });

 app.get("/api/v1/linkedIn",(request,response)=>{
    const linkSocial={
     userName: "jagdish Mahanta",
     followers: 200,
     follows:300,
     date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
 
    response.status(200).json( linkSocial );
 });

 app.get("/api/v1/:token/",(request,response)=>{
    console.log(request.params.token);
    response.status(200).json({ param: request.params.token });
 });

app.listen(PORT, () =>{
    console.log(`Server is running at PORT 7070`)
});
