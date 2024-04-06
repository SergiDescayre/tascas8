import { createContext, useContext, useState, useEffect } from "react";
import { weeks } from "../data/weeks";


const ExpensesContext = createContext();

const ContextProvider = ({ children }) => {
  
  const today = new Date().getDay();

  const [counter, setCounter] = useState(0)
  const [expenses, setExpenses] = useState(weeks[counter]);
  const [totalExpensesWeek, setTotalExpensesWeek] = useState(0);
 

  useEffect(()=> {
    setExpenses(weeks[counter]) 
    setTotalExpensesWeek(expensesWeek)
  },[counter])


 
  const filterExpensesDay = expenses.filter((day) => day.day === today);

  const filterExpensesYesterday = expenses.filter((day) => {
    if(today === 1){
      return day.day === 7
    }
    else  return day.day === today-1
  })

  const expensePercentage = Number(((filterExpensesDay[0].expense - filterExpensesYesterday[0].expense)/filterExpensesYesterday[0].expense)*100).toFixed(1)

  
  const [expensesDay, setExpensesDay] = useState(filterExpensesDay[0].expense);


    const expensesWeek = expenses.reduce((a, b) => a + b.expense, 0)


const updateWeek = (mark) => {
        if(mark==="left" && counter >0 ){
            setCounter(counter - 1)
        }

        if(mark==="rigth" && counter <2 ){
            setCounter(counter + 1)
        }

}
  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        totalExpensesWeek,
        today,
        expensesDay,
        expensePercentage,
        setExpenses,
        updateWeek,
  
      
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ContextProvider;

export const useExpensesContext = () => useContext(ExpensesContext);
