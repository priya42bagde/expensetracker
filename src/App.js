import './App.css';
import {Typography, makeStyles, Box } from "@material-ui/core"
import Balance from "./Components/Balance"
import ExpenseCard from "./Components/ExpenseCard"
import NewTransaction from "./Components/NewTransaction"
import Transaction from "./Components/Transaction"
import {useState} from "react"
const useStyle= makeStyles({
  header:{
    color :"white",
    fontSize:35,
    margin : "40px 30px",
    textTransform : "uppercase",
    background : "blue",
    padding : "30"
  },
  box:{
    background: "skyblue",
    width : 700,
    margin :"10px 10px",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    alignItems : "center",
    "&>*" :{
      width: "50%",
      padding: 10,
      height : "700",
    }
  }
  })

function App() {
  const applyStyle = useStyle()
  const [transaction, setTransaction] = useState([
    {id:1, text:"Grocery", amount: -20},
    {id:2, text:"Salary", amount: 3000},
    {id:3, text:"Book", amount: -100},
    {id:4, text:"Bonus", amount: 1500},
  ])

  const deleteTransaction = (id)=>{
    //console.log(id)
    setTransaction(transaction.filter(tran => tran.id !==id))
  }

  const addTrans =(trans)=>{
         setTransaction(transaction=> [trans, ...transaction])
  }

  return (
    <div className="App">
       <Typography className={applyStyle.header}>Expense Tracker</Typography>     
       <Box className={applyStyle.box} >
          <Box>
          <Balance transaction={transaction}/>
          <ExpenseCard transaction={transaction}/>
          <NewTransaction addTrans={addTrans} />
          </Box>
          
          <Box>
            <Transaction transaction={transaction} deleteTransaction={deleteTransaction}/>
          </Box>
       </Box>
    </div>
  );
}

export default App;
