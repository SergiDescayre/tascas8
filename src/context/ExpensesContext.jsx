import { createContext, useContext, useState, useEffect } from "react";

const ExpensesContext = createContext()

const ContextProvider = ({ children }) => {

    const [expenses, setExpenses] = useState(
        [
            
            {
                week: 1,
                day: 1,
                expense: 234
            },
            {
                week: 1,
                day: 2,
                expense: 124
            },
            {
                week: 1,
                day: 3,
                expense: 256
            },
            {
                week: 1,
                day: 4,
                expense: 243
            },
            {
                week: 1,
                day: 5,
                expense: 678
            },
            {
                week: 1,
                day: 6,
                expense: 213
            },
            {
                week: 1,
                day: 7,
                expense: 345
            }
        ])

    const today = new Date().getDay()
    console.log(today)

    const [totalExpensesWeek, setTotalExpensesWeek] = useState(
        expenses.reduce((a,b)=> a + b.expense,0)
    )

    const average = (expenses.reduce((a, b) => a + b, 0)) / expenses.length
    const max = Math.max(...expenses)

    return <ExpensesContext.Provider
        value={
            {
                expenses,
                average,
                max,
                totalExpensesWeek,
                today
            }
        }>
        {children}
    </ExpensesContext.Provider>
}

export default ContextProvider;

export const useExpensesContext = () => useContext(ExpensesContext)