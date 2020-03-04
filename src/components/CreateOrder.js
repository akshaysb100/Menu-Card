import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {withRouter} from "react-router-dom";
import './OrderList.css'

class CreateOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: "",
            selectedOption: ""
        }
    }

    handleChange = event => {
        console.log(event.target.value)
        localStorage.setItem("product", event.target.value)
        this.props.history.push("order");
    }

    render() {
        return (
            <div className="scroll">
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        <div className="Title">
                            <h3>Select Your Book</h3>
                        </div>
                    </FormLabel>
                    <div className="RadioS">
                        <RadioGroup aria-label="gender" name="gender1" value="value" onChange={this.handleChange}>
                            <FormControlLabel value="Book 10" control={<Radio/>} label="Book 10"/>
                            <FormControlLabel value="Book 3IT" control={<Radio/>} label="Book 3IT"/>
                            <FormControlLabel value="Book IIT" control={<Radio/>} label="Book IIT"/>
                            <FormControlLabel value="Book II" control={<Radio/>} label="Book II"/>
                            <FormControlLabel value="Book IT" control={<Radio/>} label="Book IT"/>
                            <FormControlLabel value="Book III" control={<Radio/>} label="Book III"/>
                            <FormControlLabel value="Book IT" control={<Radio/>} label="Book IT"/>
                            <FormControlLabel value="Book 4IT" control={<Radio/>} label="Book 4IT"/>
                            <FormControlLabel value="Book 9T" control={<Radio/>} label="Book 9T"/>
                            <FormControlLabel value="Book III" control={<Radio/>} label="Book III"/>
                            <FormControlLabel value="Book IT" control={<Radio/>} label="Book IT"/>
                            <FormControlLabel value="Book 4IT" control={<Radio/>} label="Book 4IT"/>
                            <FormControlLabel value="Book 9T" control={<Radio/>} label="Book 9T"/>
                            <FormControlLabel value="Book III" control={<Radio/>} label="Book III"/>
                            <FormControlLabel value="Book IT" control={<Radio/>} label="Book IT"/>
                            <FormControlLabel value="Book 4IT" control={<Radio/>} label="Book 4IT"/>
                            <FormControlLabel value="Book 9T" control={<Radio/>} label="Book 9T"/>
                            <FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>
                        </RadioGroup>
                    </div>
                </FormControl>
            </div>
        );
    }
}

export default withRouter(CreateOrder);