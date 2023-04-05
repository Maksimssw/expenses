import close from '../../static/icons/close.svg'
import './index.css'

const Expenses = () => {
  return(
    <section className='expenses container'>
      <ul className='expenses__list'>
        <li className='expenses__item'>
          <button className="expenses__close">
            <img
              src={close}
              alt=""
            />
          </button>

          <div className="expenses__wrapper">
            <div className="expenses__info grid-row justify-content-between">
              <p className='expenses__text'>Taxi</p>
              <p className='expenses__account'>-$250.30</p>
            </div>
            <div className="expenses__content grid-row justify-content-between">
              <p className='expenses__date'>10 Jan 2020, 02:00 PM</p>
              <p className='expenses__spend'>Spend</p>
            </div>
          </div>
        </li>

        <li className='expenses__item'>
          <button className="expenses__close">
            <img
              src={close}
              alt=""
            />
          </button>

          <div className="expenses__wrapper">
            <div className="expenses__info grid-row justify-content-between">
              <p className='expenses__text'>Travel</p>
              <p className='expenses__account'>-$550.00</p>
            </div>
            <div className="expenses__content grid-row justify-content-between">
              <p className='expenses__date'>9 Jan 2020, 06:00 PM</p>
              <p className='expenses__spend'>Spend</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Expenses