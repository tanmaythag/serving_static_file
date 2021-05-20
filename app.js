const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
}); 

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10)
    });
    joi.validate(req.body,schema,(err,result)=>{
        if(err)
            res.send('error');
        else{
            console.log(result);
            res.send("successful");}
    });

    //database work
     /* res.send('successfully send'); */
});

app.listen(3000);