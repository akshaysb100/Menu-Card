import React from "react";
import CreateOrder from "./CreateOrder";

class UpdateOrder extends React.Component {
    render() {
        return (
            <div>
                <h3>Update your Order</h3>
                <div className="OrderList">
                    <CreateOrder/>
                </div>
            </div>
        );
    }
}

export default UpdateOrder