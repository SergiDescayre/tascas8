import { useExpensesContext } from "../context/ExpensesContext";

const TotalExpenses = () => {

    const {totalExpensesWeek} = useExpensesContext()

  return (
    <div className="bg-orange-500 flex justify-between items-center p-5 rounded-xl mb-6">
      <div className="grid grid-cols-1">
        <span className="text-white">Balanç total</span>
        <span className="text-white">{totalExpensesWeek} €</span>
      </div>
      <div className="flex gap-x-4 text-white">
        <span onClick={() => alert("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
        <span onClick={() => alert("rigth")} >
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
