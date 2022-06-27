//note that dummyDatabase and thus defiend the roots
const express = require("express");
//const router = express.Router();
let medrec = require("../dummyDatabase");



const mysql = require('mysql');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
//const port = process.env.PORT || 3005;
//const playersRouter = require("./rout/router");//requires(<path>)when called render the content in the path and after completing , retu

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//addding database
const db = mysql.createConnection({//createConnection function takes configuration object as a parameter(configuration of the server which needs to be connected)
  host: 'localhost',
  user: 'root',
  password: "",
  port: 3360//this is the port for data base SQL server

});


//To check whether the connection is stablished or not
db.connect((err, result) => {//this function is used to check weather the database is connected or not 
  console.log({ err, result })
  if (err) {
    console.log({ err })

  }
  else {

    console.log('mysql connected...');
  }

});




let cartOrder = [];//array whih temporarily acts as a dabase in storeing AddToCart items.

//console.log({cartOrder});
app.post("/addtocart", async (req, res) => {//send POST request to add respective medicine , quantitiy and amount to the cart array
  console.log("Inside addtocart function")
  console.log(req.body);//to check the content of the sent items to the cart
  var reqJson = req.body;
  cartOrder.push(reqJson);//help to push the request body received to the cart array
  console.log(cartOrder);//logs the cart array to show the present content
  res.status(200).send("OK");//👍😁just for confirming that the object containg orderd medidicines details have been stored safily

  // cartOrder.push(req.body);
  // console.log({cartOrder});
}
)

app.post("/check_out", async (req, res) => {//send POST request to add respective medicine , quantitiy and amount to the cart array
  console.log("Inside checkout function")
  console.log(req.body);//to check the content of the sent items to the cart
  var reqJson = req.body.cartOrder;
  console.log(reqJson);

  reqJson.map((e1) => {
    console.log(e1.name)
    let sql1 = 'Update medicine.medicinestock SET stock=? WHERE name=?'
    db.query(sql1, [String(parseInt(stock) - parseInt(e1.quantity)), e1.name], (err, result) => {
      if (err) {
        console.log("Error Occured in checkig out");
        res.status(500).send("internal error")
      }
      else {
        console.log("update vaue of ", e1.name);


      }
    })

    // cartOrder.push(req.body);
    // console.log({cartOrder});
  }

  )
  res.status(200).send("check_out");//👍😁just for confirming that the object containg orderd medidicines details have been stored safily

})

app.get("/getcart", (req, res) => {// 🛒🛒this function is used when the person visit the ChecKKart option on the Navbar to redturn the cart storing all the updated items
  // console.log(req.body);//

  // cartOrder.push(req.body);
  console.log("Calling")
  console.log(cartOrder);//logs the cart before sending it to the cliant
  res.status(200).send({ cartOrder });//🛫✈✔✔ send the cart along with the status 200(OK) to the cliant.

  // cartOrder.push(req.body);
  // console.log({cartOrder});
}
)
app.get("/clearcart", (req, res) => {// 🛒🛒this function is used when the person visit the ChecKKart option on the Navbar to redturn the cart storing all the updated items
  // console.log(req.body);//

  // cartOrder.push(req.body);
  console.log("Calling")
  cartOrder = []
  console.log(cartOrder)//🛫✈✔✔ send the cart along with the status 200(OK) to the cliant.
  res.status(200).send("Cleared content")//we must send response to the front end along with the staus as the fetch is a promiss statemet which is waiting for a response from the backend so conform the resolultion of work
  // cartOrder.push(req.body);
  // console.log({cartOrder});
}
)
app.get("/medicine/:name", async (req, res) => {//"/:name" this endpoint is used to send the name parameter of a particular medicine
  let { name } = req.params;//destructuring id form rep.params
  console.log(typeof name);//this type of endoints should be written very 🔴🔴🔴carefully at the end becase if /:name is considered then any endpoint thus sent will be consided as name and controll will enter this sector ,,so put this at the end and always add a fixed ath(here medicine/) so that it can be segrigated from others

  //try {
  //let medstatus = medrec.find(medstatus => medstatus.name === name);//this is used  to search the record wiht the medicine name as per searched form dummyDatabse
  let sql = 'select * from medicine.medicinestock where name=?'//? acts as a placeholder and the variable which need to be place in place holder is sent as second parameter inside an arrray in db.quary function
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.log("Error Occured");
      res.status(500).send("internal error")
    }
    else {
      console.log({ result });
      //cartOrder = result;
      //console.log("cartOrder", cartOrder)
      res.status(200).json({//The res. json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON. 
        data: result
      })
    }

    //   res.status(200).json({//The res. json() function sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON. 
    //     data: medstatus

    //   });

    // } catch (err) {
    //   res.status(400).json({
    //     message: "Some error occured",
    //     err
    //   });
    // }
    //}
  })
})

app.listen(3005, () =>//👂👂Hearing at port 3002
  console.log("Server running at 3005"))
module.exports = app;