import BarChart from "../components/BarChart"
import TotalExpenses from "../components/TotalExpenses"

const ExpensesChart = () => {
  return (
    <div className="p-10">
        <TotalExpenses />
        <BarChart />
    </div>
  )
}

export default ExpensesChart