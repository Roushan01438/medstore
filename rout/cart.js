const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
//const port = process.env.PORT || 3002;
app.use(logger("dev"));
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//if the body is received it parses the drequest body to JSON for understatnd of the backen🤔🤔 because backend favours performance in JSON and does not understand string😅😅
let cartOrder = [];//array whih temporarily acts as a dabase in storeing AddToCart items.

//console.log({cartOrder});
app.post("/addtocart", async (req, res) => {//send POST request to add respective medicine , quantitiy and amount to the cart array
    console.log("Inside addtocart function")
    console.log(req.body);//to check the content of the sent items to the cart
    var reqJson=  req.body;
    cartOrder.push(reqJson);//help to push the request body received to the cart array
    console.log(cartOrder);//logs the cart array to show the present content
    res.status(200).send("OK");//👍😁just for confirming that the object containg orderd medidicines details have been stored safily

    // cartOrder.push(req.body);
    // console.log({cartOrder});
}
)
app.get("/getcart", (req, res) => {// 🛒🛒this function is used when the person visit the ChecKKart option on the Navbar to redturn the cart storing all the updated items
   // console.log(req.body);//

    // cartOrder.push(req.body);
    console.log(cartOrder);//logs the cart before sending it to the cliant
    res.status(200).send({
        "data":cartOrder});//🛫✈✔✔ send the cart along with the status 200(OK) to the cliant.

    // cartOrder.push(req.body);
    // console.log({cartOrder});
}
)


app.listen(3002, () =>//👂👂Hearing at port 3002
    console.log("Server running at 3002"))