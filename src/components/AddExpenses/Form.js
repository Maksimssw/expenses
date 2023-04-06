const Form = (props) => {
  const{action, toggleViewHandler} = props

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
        />
      </label>

      <label className='label'>
        <span>Price</span>
        <input
          className='add-expenses__input'
          type='text'
          placeholder='amount of money spent'
        />
      </label>

      <input type="date" className='add-expenses__input'/>

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