import styles from './index.module.css'

const Schedule = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const createCol = new Array(12)
      .fill('')
      .map((value, index) => {
        const month = new Date(2023, index)

        return (
          <li className={styles['schedule__item']} key={index}>
            <div className={styles['schedule__full']}></div>
            <div className={styles['schedule__month']}>
              {monthNames[month.getMonth()]}
            </div>
          </li>
        )
      })

  return (
    <section className={`${styles.schedule} container`}>
      <ul className={`${styles['schedule__list']} grid-row justify-content-between`}>
        {createCol}
      </ul>
    </section>
  )
}

export default Schedule