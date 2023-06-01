const express = require("express");
const app = express();
const port = 3000;
const Razorpay =  require("razorpay");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.post("/payment", async(req,res)=> {
    let{amount} = req.body;

    var instance = new Razorpay({ key_id: 'rzp_test_QbKMqMm9Pvgtvg',
     key_secret: 'ryR8ZumquyCrOTChqg3WXjiM' })
     
     let order = await instance.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt#1"      
      }) 
      res.status(201).json({
        success : true,
        order,
        amount
      })
});

app.listen(port,()=>{
    console.log('Server is running in port ${port}');
});