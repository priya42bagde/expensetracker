import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
     lists :{
         marginTop: 10,
         border : "1px solid #f6f6f6",
     }
})

function TransactionIterate({transaction, deleteTransaction}) {
    const apply = useStyle()
    const color = transaction.amount >=0 ? "Green": "Red" //green and red
    const sign = transaction.amount>= 0 ? "₹" : "-₹"
    const amount = sign + Math.abs(transaction.amount);
    return (
        <ListItem className={apply.lists} style={{background: "${color}"}}>
            <ListItemIcon>
                <DeleteIcon onClick={()=>deleteTransaction(transaction.id)}/>
            </ListItemIcon>
            <ListItemText primary={transaction.text}/>
            <ListItemText primary={amount}/>
      </ListItem>
    )
}

export default TransactionIterate
