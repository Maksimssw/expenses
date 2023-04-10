import close from '../../../static/icons/close.svg'
import './index.css'

const Expenses = (props) => {
  const {onExpenses, year} = props

  const expenses = onExpenses.filter((expense) => expense.year === year).map((expense) => {
    return (
      <li className='expenses__item' key={expense.id}>
        <button className="expenses__close">
          <img
            src={close}
            alt=""
          />
        </button>

        <div className="expenses__wrapper">
          <div className="expenses__info grid-row justify-content-between">
            <p className='expenses__text'>{expense.title}</p>
            <p className='expenses__account'>-${expense.amount}</p>
          </div>
          <div className="expenses__content grid-row justify-content-between">
            <p className='expenses__date'>{expense.date}</p>
            <p className='expenses__spend'>Spend</p>
          </div>
        </div>
      </li>
    )
  })


  return(
    <section className='expenses container'>
      <ul className='expenses__list'>
        {expenses}
      </ul>
    </section>
  )
}

export default Expenses