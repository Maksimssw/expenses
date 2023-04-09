import './index.css'

const Years = (props) => {
  const {onAddYear, year} = props
  const getYearHandler = (event) => {
    onAddYear(event.target.value)
  }

  return (
    <section className='years container grid-row justify-content-between'>
      <label className='years__text'>Choose a year</label>
      <select
        className='years__select'
        onChange={getYearHandler}
        value={year}
      >
        <option value='2020'>2022</option>
        <option value='2021'>2021</option>
        <option value='2022'>2020</option>
      </select>
    </section>
  )
}

export default Years