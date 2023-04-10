import './index.css'
import Form from "./Form";
import {useState} from "react";

const AddExpenses = (props) => {
  const[action, setAction] = useState(false)

  const toggleViewHandler = (e) => {
    e.preventDefault()
    setAction(!action)
  }

  const saveDataHandler = (data) => {
    const costData = {
      ...data,
      id: Math.random().toString(),
      year: new Date(data.date).getFullYear().toString()
    }
    props.onAddExpenses(costData)
  }

  return (
    <section className='add-expenses container'>
      <h1 className='add-expenses__headline'>Expenses</h1>
      <Form
        action={action}
        onToggleView={toggleViewHandler}
        onSaveData={saveDataHandler}
      />
      <div
        className={`grid-row justify-content-center ${action ? 'disabled' : ''}`}
      >
        <button className='add-expenses__button' onClick={toggleViewHandler}>
          Add Expenses
        </button>
      </div>
    </section>
  )
}

export default AddExpenses