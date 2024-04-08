import { describe ,it, expect, beforeEach} from "vitest";
import { render } from "@testing-library/react";

import ContextProvider from "../context/ExpensesContext"; 
import TotalExpenses from "./TotalExpenses";


const MockedExpensesContextProvider = ({ children }) => {
  const totalExpensesWeek = 100; 
  const counter = 1;

  return (
    <ContextProvider value={{ totalExpensesWeek, counter }}>
      {children}
    </ContextProvider>
  );
};

describe('DayExpenses Component', () => {
    beforeEach(()=> {
        render(
          <MockedExpensesContextProvider>
            <TotalExpenses />
          </MockedExpensesContextProvider>
        );
    })
  
  it("should totalExpensesWeek is in the document", () => {
    const totalExpenses = document.querySelector(".expenses_week")
    expect(totalExpenses).toBeInTheDocument()
  })

  it("should counter is in the document ", () => {
    const counter = document.querySelector(".counter")
    expect(counter).toHaveTextContent(1)
  })
});