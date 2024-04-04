import { createContext, useContext, useState, useEffect } from "react";

const ExpensesContext = createContext();

const ContextProvider = ({ children }) => {
  const weeks = {
    weekOne: [
      {
        day: 1,
        expense: 123,
      },
      {
        day: 2,
        expense: 234,
      },
      {
        day: 3,
        expense: 221,
      },
      {
        day: 4,
        expense: 222,
      },
      {
        day: 5,
        expense: 123,
      },
      {
        day: 6,
        expense: 345,
      },
      {
        day: 7,
        expense: 215,
      },
    ],

    weekTwo: [
      {
        day: 1,
        expense: 324,
      },
      {
        day: 2,
        expense: 111,
      },
      {
        day: 3,
        expense: 324,
      },
      {
        day: 4,
        expense: 167,
      },
      {
        day: 5,
        expense: 231,
      },
      {
        day: 6,
        expense: 289,
      },
      {
        day: 7,
        expense: 216,
      },
    ],
    weekTwo: [
      {
        day: 1,
        expense: 332,
      },
      {
        day: 2,
        expense: 84,
      },
      {
        day: 3,
        expense: 123,
      },
      {
        day: 4,
        expense: 21,
      },
      {
        day: 5,
        expense: 234,
      },
      {
        day: 6,
        expense: 221,
      },
      {
        day: 7,
        expense: 123,
      },
    ],
  };

  const today = new Date().getDay();
  const [expenses, setExpenses] = useState(weeks.weekOne);

  const filterExpensesDay = expenses.filter((day) => day.day === today);

  console.log(filterExpensesDay[0].expense);

  const [totalExpensesWeek, setTotalExpensesWeek] = useState(
    expenses.reduce((a, b) => a + b.expense, 0)
  );

  const [expensesDay, setExpensesDay] = useState(filterExpensesDay[0].expense);

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        totalExpensesWeek,
        today,
        expensesDay,
        setExpenses,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ContextProvider;

export const useExpensesContext = () => useContext(ExpensesContext);
