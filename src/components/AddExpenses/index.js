import './index.css'

function AddExpenses() {
  return (
    <section className='add-expenses container'>
      <h1 className='add-expenses__headline'>Expenses</h1>
      <form
        className='add-expenses__form'
      >
        <input
          className='add-expenses__input'
          type='text'
          placeholder='Add new expenses item'
        />
        <button
          className='add-expenses__button'
          value='Submit'
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  )
}

export default AddExpenses