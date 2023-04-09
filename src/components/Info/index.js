import Expenses from "./Expenses";
import Schedule from "./Schedule";
import Years from "./Years";
import {useState} from "react";

const Info = (props) => {
  const [year, setYear] = useState('')

  const addYearHandel = (year) => setYear(year)

  return (
    <>
      <Years onAddYear={addYearHandel} />
      <Schedule />
      <Expenses onExpenses={props.onExpenses} />
    </>
  )
}

export default Info