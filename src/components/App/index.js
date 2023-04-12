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

  const removeExpenseHandler = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <main>
      <AddExpenses onAddExpenses={addExpensesHandler}/>
      <Info
        onExpenses={expenses}
        onRemove={removeExpenseHandler}
      />
    </main>
  );
}

export default App;
