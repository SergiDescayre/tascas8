import { describe ,it, expect, beforeEach} from "vitest";
import { render } from "@testing-library/react";

import ContextProvider from "../context/ExpensesContext"; 
import DayExpenses from './DayExpenses';


const MockedExpensesContextProvider = ({ children }) => {
  const expensesDay = 100; 
  const expensePercentage = 10;

  return (
    <ContextProvider value={{ expensesDay, expensePercentage }}>
      {children}
    </ContextProvider>
  );
};

describe('DayExpenses Component', () => {
    beforeEach(()=> {
        render(
          <MockedExpensesContextProvider>
            <DayExpenses />
          </MockedExpensesContextProvider>
        );
    })

  it("should expense in the document" ,() => {
    const expense = document.querySelector(".expenses_day")
    expect(expense).toBeInTheDocument();
  })
  it("should percentatge in the document" ,() => {
    const percentatge = document.querySelector(".percentatge")
    expect(percentatge).toBeDefined();
  })
});