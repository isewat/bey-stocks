import React, { useState } from 'react';
import { Typography, Button, Grid, Divider, TextField, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { ButtonGroup } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




const Add = () => {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState("");
    const [price, setPrice] = useState("");
    const [ordertype, setOrdertype] = useState("buy");
    const [date, setDate] = useState("");
    const history = useHistory();
    const [fees, setFees] = useState("");

    const toInteger = (text) => {
        return parseInt(text) || null;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const total = volume*price+fees;
        const stocks = { name, volume, price, ordertype, total};

        fetch("http://localhost:8000/stocks", {
            method:"POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(stocks)
        }).then(() => 
        console.log("new stock added"))
        history.push("/Test") 
        
    }



    return (
        <div>
            <h2>Add order</h2>
            <form onSubmit={handleSubmit} className="stockname" noValidate autoComplete="off" >
                <TextField value={name} onChange={(e) => setName(e.target.value)} required id="standard-basic" label="Stock"></TextField>
                <TextField value={volume} onChange={(e) => setVolume(toInteger(e.target.value))} required id="standard-basic" label="Volume"></TextField>
            </form>

            <form onSubmit={handleSubmit} className="stock-details" noValidate autoComplete="off" >
                <TextField value={price} onChange={(e) => setPrice(toInteger(e.target.value))} required id="standard-basic" label="price"></TextField>
                <TextField
                    required
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2021-08-21"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </form>
            <form classname="select" onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField value={ordertype} onChange={(e) => setOrdertype(e.target.value)}  id="select" label="Ordertype" select>
                    <MenuItem value="buy">Buy</MenuItem>
                    <MenuItem value="sell">Sell</MenuItem>
                </TextField>
                <TextField value={fees} onChange={(e) => setFees(toInteger(e.target.value))} required id="standard-basic" label="fees"></TextField>
                <p id="total">Total: {volume*price+fees}</p>
            </form>
            <form onSubmit={handleSubmit}>
                <a href>
                <button id="button2" varaint="contained" color="primary">Add Order</button>
                </a>

            </form>


            {/* <ButtonGroup className="ordertype" color="primary">
                <Button>Buy</Button>
                <Button>Sell</Button>
            </ButtonGroup> */}

        </div>

    )
}

export default Add;
