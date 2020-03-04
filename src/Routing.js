import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react";
import history from "./history";
import CreateOrder from "./components/CreateOrder";
import Order from "./components/Order";
import UpdateOrder from "./components/UpdateOrder"
import ConfirmOrder from "./components/ConfirmOrder";

export default function Routing() {
    return (
        <Router history={history}>
            <Route exact path="/">
                <div>
                    <div className="OrderTitle">
                        <h2>Product List</h2>
                    </div>
                    <div className="OrderList">
                        <CreateOrder/>
                    </div>
                </div>
                <div style={{backgroundColor: "black", height: "20em"}}>
                </div>
            </Route>
            <Route path="/order">
                <Order/>
                <div style={{backgroundColor: "black", height: "55em"}}>
                </div>
            </Route>
            <Route path="/updateOrder">
                <UpdateOrder/>
            </Route>
            <Route path="/deleteOrder">
                <div className="OrderList">
                    <CreateOrder/>
                </div>
            </Route>
            <Route path="/confirmOrder">
                <ConfirmOrder/>
                <div style={{backgroundColor: "black", height: "55em"}}>
                </div>
            </Route>
        </Router>
    );
}