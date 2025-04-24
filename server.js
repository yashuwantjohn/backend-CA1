const express = require ('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req ,res) => {
     return res.send('welcome to signup page!');
})
app.post("/signup",(req,res) => {
    const{email,password,}= req.body;

    if(!email){
        return res.status(400).send("email cannot be empty");
    }
    if(!password.length>8 && password.length<=16){
        return res.status(400).send("password length should be greater than 8 and less than or equal to 16 and password cannot be empty");
    }
    return res.send("signup successful");
})
app.listen(port,() =>{
    console.log(`server is listening at http://localhost:${port}`);
});