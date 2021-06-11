import React from 'react'
import {Box, Typography, makeStyles} from "@material-ui/core"

const useStyle = makeStyles({
    balance:{
        fontSize: 30,
        marginBottom: 20,
        color : "DarkGreen",
        background : "white",
        padding: 20
    }
})
function Balance({transaction}) {
    const applyStyleToBox = useStyle()
    const amount = transaction.map(trans => trans.amount)
    const total = amount.reduce((amount, item)=>(amount+=item), 0).toFixed(2)
    return (
        <div>
            <Box>
                <Typography className={applyStyleToBox.balance}>
                 Balance: ₹ {total}
                </Typography>
            </Box>
        </div>
    )
}

export default Balance
