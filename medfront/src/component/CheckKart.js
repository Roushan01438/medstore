import React, { useState, useRef, useEffect } from 'react'
export default function CheckKart() {
  const [cart, setCart] = useState({});//stores the present items whih are added to the cart
  const [total, setTotal] = useState(0);
  //useEffect(() => { console.log("changes ", { total }) }, [total]);
  var cartp = async () => {//ceate a asunc await function ffor fething the data from backend
    var orders = await fetch("http://localhost:3005/getcart")//await fetch function with the datails of element added to cart in from of array
    var respJson = await orders.json();//converts the received response to json format
    console.log("respJson",respJson);//logs the output to see 
    setCart(respJson);//changes teh cart to the updated value received from the backend
    console.log("cart",cart);
    //console.log(cart.cartOrder.name);
    var tot = 0;
    console.log({cart});
    if (respJson != {}) {
      //withing these curly bracket ,only one javascript statement can be added.
      console.log({cart});
      respJson.cartOrder && // null or undefined is false ...here we check cart.cartOrder and if it containst anything thenonly display the table else do not display the table
        respJson.cartOrder.map((med) => (
          tot += med.total_price

        )
        )

    }
    // useEffect(()=>{
    //   setTotal(tot);
    // },[tot])
    setTotal(tot);
    
    

  }

  var cartc = async () => {//ceate a asunc await function ffor fething the data from backend
    console.log(cart)
    console.log("called")
    var orders = await fetch("http://localhost:3005/clearcart")//await fetch function with the datails of element added to cart in from of array
    //logs the output to see 
    setCart({});
    setTotal(0);//changes teh cart to the updated value received from the backend
    console.log(cart);
  }

  var check_out = async () => {//ceate a asunc await function ffor fething the data from backend
    console.log(cart)
    console.log("called inside checkout_function")
    var orders = await fetch("http://localhost:3005/check_out",{
      method: "POST",
      body: JSON.stringify(cart),
     //body:{"name":info.name,"quantity":number},
      headers: { "Content-Type": "application/json" }
    })//await fetch function with the datails of element added to cart in from of array
   ;
  }

  return (
    <div>
      <button type="button" className="btn btn-dark btn-lg" onClick={() => {//function to triger the cartp function which inturn triggrs the onclick function
        console.log("called")
        cartp();
      }}>View all medicines in cart.</button>

      {/* //<div>{cart}</div>  displays the content of cart */}

      <div><button type="button" className="btn btn-dark btn-lg" onClick={() => {//function to triger the cartp function which inturn triggrs the onclick function
        cartc();
      }}>Clear cart.</button></div>



      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantiy</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.cartOrder && // null or undefined is false ...here we check cart.cartOrder and if it containst anything thenonly display the table else do not display the table
            cart.cartOrder.map((med) => (
              <tr>
                <th scope="row">1</th>
                <td>{med.name}</td>
                <td>{med.quantity}</td>
                <td>{med.total_price}</td>
              </tr>

            ))}

        </tbody>

      </table>;
      <h1>Total:{total}</h1>
      <div><button type="button" className="btn btn-dark btn-lg" onClick={() => {//function to triger the cartp function which inturn triggrs the onclick function
        check_out();
      }}>Check out.</button></div>

    </div>

  )
}
//export default CheckKart