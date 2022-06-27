
import React, { useEffect } from 'react';
import { useState } from 'react';



function Search() {

    const [info, setInfo] = useState([]);//dclearing a state which will contain the details of the searched medicine
    //onst [instock,setInstock]=useState(false);
    function handleSubmit(xyz) {
        console.log("The name of medicne " + xyz);

    }

    let showDetails = async (props) => {
        console.log("inside showDetail function")
        let response = await fetch(`http://localhost:3005/medicine/${props}`);//we send a request to the server at port 3005 to search the medicine with name as send in {props}
        let responseJson = await response.json();//converts the received data into JSON
        console.log({ responseJson });//
        setInfo(responseJson.data[0]);//sets the info state
        console.log({ info })
    }
    //useEffect(() => { console.log("changes ", { info }) }, [info]);
 
    function atk(number) {
        var order = {//store all the info which need to be sent to bankend to be stored in cart.
            "name": info.name,
            "quantity":number,
            "total_price":number*info.price
        }
       console.log(order)
        fetch("http://localhost:3005/addtocart", {//sending post request with the fetch request
            method: "POST",
            body: JSON.stringify(order),
           //body:{"name":info.name,"quantity":number},
            headers: { "Content-Type": "application/json" }//this header type states that the content of body is in JSON
        })
    }
    return <div className="container">




        {/* <form className="row g-3 text-center" > */}
        <div className=" col-auto my-100">
            <label htmlFor="staticEmail2"><h1>Enter medicine's Name</h1></label>

        </div>
        <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">Medicine</label>
            <input type="text" className="form-control" id="name" placeholder="Medicine" />
        </div>

        <div className="col-auto mx-10">
            <button type="submit" className="btn btn-primary mb-3" onClick={() => {
                handleSubmit(document.getElementById("name").value);
                showDetails(document.getElementById("name").value);
            }}>Search</button>



        </div>

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Nature</th>
                        <th scope="col">Quantity per Unit</th>
                        <th scope="col">price per Unit</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> {info.name}</td>
                        <td>{info.nature}</td>
                        <td>{info.qpr} </td>
                        <td>{info.price} </td>
                        <td>{info.stock} </td>
                    </tr>
                </tbody>
            </table>


            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Order
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Medicine:{info.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label>Enter Quantity</label>
                            <input id="number" type="number" className="form-control" name="number" placeholder="Quantity" min={1}  max={info.stock}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { alert("Directing to payment"); }}>Buy</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                alert("Content added to Cart");
                                atk(document.getElementById("number").value);
                               
                            }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* </form> */}

    </div>;

}


export default Search;
