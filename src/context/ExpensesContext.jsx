import { createContext, useContext,useState,useEffect} from "react";

const ExpensesContext = createContext()

const ContextProvider = ({children}) =>{

    const [expenses, setExpenses] =  useState([120, 340, 210, 220, 123, 150, 205, 30])

    const [totalExpensesWeek , setTotalExpensesWeek] = useState(0)

    useEffect(()=> {
        setTotalExpensesWeek(expenses.reduce((acc, curr)=> acc + curr))
    },[expenses])
    

    const average = (expenses.reduce((a,b) => a+b,0))/expenses.length
    const max = Math.max(...expenses)

    return  <ExpensesContext.Provider 
    value={
            {
                expenses,
                average,
                max,
                totalExpensesWeek
            }
        }>
    {children}
    </ExpensesContext.Provider>
}

export default  ContextProvider;

export const useExpensesContext = () => useContext(ExpensesContext)