import AddExpenses from "../AddExpenses";
import {useState} from "react";
import Info from "../Info";

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
      <Info onExpenses={expenses}/>
    </main>
  );
}

export default App;
