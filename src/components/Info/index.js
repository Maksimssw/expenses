import Expenses from "./Expenses";
import Schedule from "./Schedule";
import Filter from "./Filter";
import {useState} from "react";

const Info = (props) => {
  const {onExpenses, onRemove} = props
  const [year, setYear] = useState(new Date().getFullYear().toString())

  const addYearHandel = (year) => setYear(year)

  return (
    <>
      <Filter
        year={year}
        onExpenses={onExpenses}
        onAddYear={addYearHandel}
      />
      <Schedule />
      <Expenses
        year={year}
        onExpenses={onExpenses}
        onRemove={onRemove}
      />
    </>
  )
}

export default Info