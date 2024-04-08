
import { useExpensesContext } from "../context/ExpensesContext";
import { useTranslation } from "react-i18next";

const TotalExpenses = () => {

    const {totalExpensesWeek,updateWeek,counter} = useExpensesContext()
    const {t} = useTranslation("global")

  return (
    <div className="bg-orange-500 flex justify-between items-center p-5 rounded-xl mb-6 dark:bg-slate-950">
      <div className="grid grid-cols-1">
        <span className="counter text-white text-xs">{t("totalBalance")}{counter+1}</span>
        <span className="expenses_week text-white text-[25px]">{totalExpensesWeek} €</span>
      </div>
      <div className="flex gap-x-4 text-white">
        <span onClick={() => updateWeek('left')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
        <span onClick={() => updateWeek('rigth')} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TotalExpenses;
