import { useExpensesContext } from "../context/ExpensesContext";
import { useTranslation } from "react-i18next";

const DayExpenses = () => {
  const {t} = useTranslation("global")
  const { expensesDay,expensePercentage } = useExpensesContext();
  return (
    <div className="flex justify-between items-center mt-4 border-t-2 border-gray-400 pt-4  ">
      <div>
        <div className="text-xs text-gray-500 font-bold">{t("dailyExpenses")}</div>
        <div className="expenses_day text-[35px] font-semibold">{expensesDay} €</div>
      </div>
      <div>
        <div className="percentatge text-xs text-right">
          {
            expensePercentage >= 0 ? `+${expensePercentage}` : expensePercentage
          }
           %
          </div>
        <div className="text-xs">{t("comparedYesterday")}</div>
      </div>
    </div>
  );
};

export default DayExpenses;
