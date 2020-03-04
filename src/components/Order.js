import React from "react";
import {withRouter} from "react-router-dom";
import axios from 'axios'

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    orderUpdate = event => {
        this.props.history.push("updateOrder");
    }

    deleteOrder = event => {
        localStorage.clear()
        this.props.history.push("/")
    }

    confirmOrder = event => {
        const product = localStorage.getItem("product")

        axios({
            method: 'post',
            url: 'http://localhost:8080/order/createOrder',
            headers: {},
            data: {
                "productName": product
            }
        });
        this.props.history.push("confirmOrder")
    }

    render() {
        return (
            <div>
                <div className="OrderTitle">
                    <h2>Your Product</h2>
                    <h3>{localStorage.getItem("product")}</h3>
                </div>
                <div className="OrderTitle">
                    <button className="buttonBuyNow" onClick={() => this.confirmOrder()}>OrderConfirm</button>
                    <button className="buttonBuyNow" onClick={() => this.orderUpdate()}>OrderUpdate</button>
                    <button className="buttonBuyNow" onClick={() => this.deleteOrder()}>DeleteOrder</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Order)
