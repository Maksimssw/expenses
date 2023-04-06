import {useState} from "react";

const Form = (props) => {
  const{action, toggleViewHandler} = props

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (e) => setTitle(e.target.value)
  const amountChangeHandler = (e) => setAmount(e.target.value)
  const dateChangeHandler = (e) => setDate(e.target.value)

  return (
      <form
        className={`add-expenses__form ${action ? '' : 'disabled'}`}
      >
      <label className='label'>
        <span>Title</span>
        <input
          className='add-expenses__input'
          type='text'
          placeholder='add a new expense'
          onChange={titleChangeHandler}
        />
      </label>

      <label className='label'>
        <span>Amount</span>
        <input
          className='add-expenses__input'
          type='text'
          placeholder='amount of money spent'
          onChange={amountChangeHandler}
        />
      </label>

      <input type="date" className='add-expenses__input' onChange={dateChangeHandler}/>

      <div className="add-expenses__container grid-row justify-content-start">
        <button
          className='add-expenses__button'
          type="submit"
        >
          Add
        </button>

        <button
          className='add-expenses__button'
          type="submit"
          onClick={toggleViewHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form