import AddExpenses from "../AddExpenses";
import Schedule from "../Schedule";
import Expenses from "../Expenses";
import {useState} from "react";

const App = () => {

  const [expenses, setExpenses] = useState([])

  const addExpensesHandler = (data) => {
    setExpenses((state) => {
      return [...state, data]
    })
  }

  return (
    <main>
      <AddExpenses onAddExpenses={addExpensesHandler}/>
      <Schedule />
      <Expenses />
    </main>
  );
}

export default App;
