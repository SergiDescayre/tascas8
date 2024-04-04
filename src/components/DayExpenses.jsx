import { useExpensesContext } from "../context/ExpensesContext";

const DayExpenses = () => {
  const { expensesDay } = useExpensesContext();
  return (
    <div className="flex justify-between items-center mt-4 border-t-2 border-gray-400 pt-4 ">
      <div>
        <div className="text-xs text-gray-500 font-bold">Despeses avui</div>
        <div className="text-[35px] font-semibold">{expensesDay} €</div>
      </div>
      <div>
        <div className="text-xs text-right">+ 2.5%</div>
        <div className="text-xs">respecte ahir</div>
      </div>
    </div>
  );
};

export default DayExpenses;
