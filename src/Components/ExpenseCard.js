import React from 'react'
import { Card, CardContent, Typography, Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        display: "flex",
        "& > *" : {
            padding : 10,
            flex : 1
        }
    },
    income:{
        color : "green"
    },
    expense :{
        color: "red"
    }
})

function ExpenseCard({transaction}) {
    const applyStyle= useStyle()
    const amount =transaction.map(tran=>tran.amount)
    const income = amount.filter(item => item > 0).reduce((acc, item)=> (acc+=item),0).toFixed(2)
    const expense = (amount.filter(item => item < 0).reduce((acc, item)=> (acc+=item),0)*-1).toFixed(2)
    return (
        <div>
        <Box className={applyStyle.container}>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={applyStyle.income}> ₹ {income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={applyStyle.expense}> ₹ {expense}</Typography>
                </CardContent>
            </Card>
        </Box>    
        </div>
    )
}

export default ExpenseCard
