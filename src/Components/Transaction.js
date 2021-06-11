import { Box, Divider, makeStyles, Typography, List } from '@material-ui/core'
import React from 'react'
import TransactionIterate from "./TransactionIterate"

const useStyle = makeStyles({
    component :{
       "& >*":{
           marginBottom : 10
       }
    }
})

function Transaction({transaction, deleteTransaction}) {
    const apply = useStyle()
    return (
        <Box className={apply.component}>
            <Typography variant="h5">Transaction History</Typography>
             <Divider />   
             <List>
                 {
                     transaction.map( trans =>{
                         //console.log(trans)
                         return <TransactionIterate key={transaction.id} transaction={trans} deleteTransaction={deleteTransaction}/>
                     })
                 }
             </List> 
        </Box>
    )
}

export default Transaction
