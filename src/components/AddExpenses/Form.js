import {useState} from "react";
import styles from './index.module.css'

const Form = (props) => {
  const{action, onToggleView, onSaveData} = props

  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })
  const [errorText, setErrorText] = useState(false)

  const changeHandler = (event) => {
    setErrorText(false)
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

    for (const key in data) {
      if (data[key].trim() === '') {
        setErrorText(true)
        return
      }
    }

    onSaveData(data)
    setData({
      title: '',
      amount: '',
      date: ''
    })
  }

  return (
      <form
        className={`${styles['add-expenses__form']} ${!action && 'disabled'}`}
        onSubmit={changeFormHandler}
      >
      <h2
        className={`${styles['add-expenses__error']} ${!errorText && 'disabled'}`}
      >
        Fill in all the fields!
      </h2>
      <label className='label'>
        <span>Title</span>
        <input
          className={styles['add-expenses__input']}
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
          className={styles['add-expenses__input']}
          type='number'
          placeholder='amount of money spent'
          value={data.amount}
          name='amount'
          onChange={changeHandler}
        />
      </label>

      <input
        type="date"
        className={styles['add-expenses__input']}
        value={data.date}
        name='date'
        onChange={changeHandler}
      />

      <div className={`${styles['add-expenses__container']} grid-row justify-content-start`}>
        <button
          className={styles['add-expenses__button']}
          type="submit"
        >
          Add
        </button>

        <button
          className={styles['add-expenses__button']}
          onClick={onToggleView}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form