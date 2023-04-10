import Expenses from "./Expenses";
import Schedule from "./Schedule";
import Filter from "./Filter";
import {useState} from "react";

const Info = (props) => {
  const [year, setYear] = useState('2023')

  const addYearHandel = (year) => setYear(year)

  return (
    <>
      <Filter
        year={year}
        onAddYear={addYearHandel}
        onExpenses={props.onExpenses}
      />
      <Schedule />
      <Expenses
        onExpenses={props.onExpenses}
        year={year}
      />
    </>
  )
}

export default Info