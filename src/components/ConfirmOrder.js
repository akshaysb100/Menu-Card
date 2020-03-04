import React from "react";
import {withRouter} from "react-router-dom";
import axios from 'axios'

class ConfirmOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: 1
        }
    }

    homePage = event => {
        localStorage.clear()
        this.props.history.push("/")
    }

    orderUpdate = event => {
        this.props.history.push("updateOrder");
    }

    componentDidMount() {
        axios.get('http://localhost:8080/order/getId')
            .then(res => {
                this.state.productId = res.data
                this.setState({productId: (this.state.productId + 1)})
            })
    }

    deleteOrder = event => {
        localStorage.clear()
        axios.delete('http://localhost:8080/order/deleteOrder', {
            params: {
                id: this.state.productId
            }
        })
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Your Order Confirm</h1>
                <h3>{localStorage.getItem("product")}</h3>
                <button className="buttonBuyNow" onClick={() => this.homePage()}>HomePage</button>
                {/*<button onClick={() => this.orderUpdate()}>OrderUpdate</button>*/}
                <button className="buttonBuyNow" onClick={() => this.deleteOrder()}>DeleteOrder</button>
            </div>
        );
    }
}

export default withRouter(ConfirmOrder)