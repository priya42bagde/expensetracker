import React,{useState} from 'react'
import {Box, Button, makeStyles, TextField, Typography} from "@material-ui/core"
import { MailOutlineSharp } from '@material-ui/icons'

const useStyle =makeStyles({
    container:{
        display: "flex",
        flexDirection: "column",
        "& > *":{
            marginTop : 30
        }
    },
    button :{
        background: "#445A6F",
        color : "#fff"
    }
})
function NewTransaction({addTrans}) {
    const apply = useStyle()
    const [text, setText] = useState()
    const [amount, setAmount] = useState()

    const newTrans =()=>{
        const transaction ={
            id : Math.floor(Math.random() * 1000),
            text: text,
            amount : +amount
        }

        addTrans (transaction)
    }

    return (
        <Box className={apply.container}>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Expense" onChange={e=>setText(e.target.value)}/>
            <TextField label="Total Amount" onChange={e=>setAmount(e.target.value)}/>
            <Button className={apply.button} onClick={newTrans} variant="contained">Add New Transaction</Button>
        </Box>
    )
}

export default NewTransaction
