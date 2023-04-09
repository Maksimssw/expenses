import './index.css'

const Years = (props) => {
  const {onAddYear} = props
  const getYearHandler = (event) => {
    onAddYear(event.target.value)
  }

  return (
    <section className='years container grid-row justify-content-end'>
      <select onChange={getYearHandler}>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
    </section>
  )
}

export default Years