import styles from './index.module.css'
import {useEffect, useRef, useState} from "react";

const Filter = (props) => {
  const {onAddYear, year, onExpenses} = props

  useEffect(() => {
    onAddYear(select.current.value.toString())
  })

  const select = useRef(null)
  const getYearHandler = (event) => {
    onAddYear(event.target.value)
  }

  const years = [...new Set (
    onExpenses.map((expense) => expense.year)
  )]
    .map((year, i) => <option key={i} value={year}>{year}</option>)

  return (
    <section className={`${styles.years} container grid-row justify-content-between`}>
      <label className={styles['years__text']}>Choose a year</label>
      <select
        className={styles['years__select']}
        onChange={getYearHandler}
        value={year}
        ref={select}
      >
        {years}
      </select>
    </section>
  )
}

export default Filter