var nodemailer = require('nodemailer');
 var  transporter = nodemailer.createTransport({
    service : 'gmail',
    auth:{
       user:'meena@gmail.com',
       pass :'92929292'
    }

 })
 var options ={
    from :'meena@gmail.com',
    to : 'srisgmail.com',
    subject:'node mail',
    text:'node js is open source framework '
 }
  transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('mail sent sucessfully'+info.response)
    }
  })