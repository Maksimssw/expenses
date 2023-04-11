import close from '../../../static/icons/close.svg'
import styles from './index.module.css'

const Expenses = (props) => {
  const {onExpenses, year} = props

  const expenses = onExpenses.filter((expense) => expense.year === year).map((expense) => {
    return (
      <li className={styles['expenses__item']} key={expense.id}>
        <button className={styles['expenses__close']}>
          <img
            src={close}
            alt=""
          />
        </button>

        <div className={styles['expenses__wrapper']}>
          <div className={`${styles['expenses__info']} grid-row justify-content-between`}>
            <p className={styles['expenses__text']}>{expense.title}</p>
            <p className={styles['expenses__account']}>-${expense.amount}</p>
          </div>
          <div className={`${styles['expenses__content']} grid-row justify-content-between`}>
            <p className={styles['expenses__date']}>{expense.date}</p>
            <p className={styles['expenses__spend']}>Spend</p>
          </div>
        </div>
      </li>
    )
  })


  return(
    <section className={`${styles.expenses} container`}>
      <ul className={styles['expenses__list']}>
        {expenses}
      </ul>
    </section>
  )
}

export default Expenses