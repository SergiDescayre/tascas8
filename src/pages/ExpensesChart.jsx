import BarChart from "../components/BarChart"
import Flags from "../components/Flags"
import TotalExpenses from "../components/TotalExpenses"

const ExpensesChart = () => {
  return (
    <div className="p-10 mx-auto w-[375px]">
        <Flags />
        <TotalExpenses />
        <BarChart />
    </div>
  )
}

export default ExpensesChart