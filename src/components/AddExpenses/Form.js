import {useState} from "react";

const Form = (props) => {
  const{action, toggleViewHandler} = props

  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const changeHandler = (event) => {
    const name = event.target.name

    setData((state) => {
      return {
        ...state,
        [name]: event.target.value
      }
    })
  }

  const changeFormHandler = (event) => {
    event.preventDefault()
    console.log(data)
    toggleViewHandler(event)
    setData({
      title: '',
      amount: '',
      date: ''
    })
  }

  return (
      <form
        className={`add-expenses__form ${action ? '' : 'disabled'}`}
        onSubmit={changeFormHandler}
      >
      <label className='label'>
        <span>Title</span>
        <input
          className='add-expenses__input'
          type='text'
          placeholder='add a new expense'
          value={data.title}
          name='title'
          onChange={changeHandler}
        />
      </label>

      <label className='label'>
        <span>Amount</span>
        <input
          className='add-expenses__input'
          type='number'
          placeholder='amount of money spent'
          value={data.amount}
          name='amount'
          onChange={changeHandler}
        />
      </label>

      <input
        type="date"
        className='add-expenses__input'
        value={data.date}
        name='date'
        onChange={changeHandler}
      />

      <div className="add-expenses__container grid-row justify-content-start">
        <button
          className='add-expenses__button'
          type="submit"
        >
          Add
        </button>

        <button
          className='add-expenses__button'
          onClick={toggleViewHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form