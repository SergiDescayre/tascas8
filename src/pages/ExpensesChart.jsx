import BarChart from "../components/BarChart"
import Flags from "../components/Flags"
import TotalExpenses from "../components/TotalExpenses"

const ExpensesChart = () => {
  return (
    <div className="p-10 mx-auto">
        <Flags />
        <TotalExpenses />
        <BarChart />
    </div>
  )
}

export default ExpensesChart