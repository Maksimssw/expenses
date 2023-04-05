import './index.css'

function Schedule() {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const createCol = new Array(12)
      .fill('')
      .map((value, index) => {
        const month = new Date(2023, index)

        return (
          <li className='schedule__item' key={index}>
            <div className='schedule__full'></div>
            <div className='schedule__month'>
              {monthNames[month.getMonth()]}
            </div>
          </li>
        )
      })

  return (
    <section className='schedule container'>
      <ul className='schedule__list grid-row justify-content-between'>
        {createCol}
      </ul>
    </section>
  )
}

export default Schedule