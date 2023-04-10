import './index.css'

const Filter = (props) => {
  const {onAddYear, year, onExpenses} = props
  const getYearHandler = (event) => {
    onAddYear(event.target.value)
  }

  const years = [...new Set (
    onExpenses.map((expense) => expense.year)
  )]
    .map((expense, i) => <option key={i} value={expense}>{expense}</option>)

  return (
    <section className='years container grid-row justify-content-between'>
      <label className='years__text'>Choose a year</label>
      <select
        className='years__select'
        onChange={getYearHandler}
        value={year}
      >
        {years}
      </select>
    </section>
  )
}

export default Filter