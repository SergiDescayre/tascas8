import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

import { useExpensesContext } from '../context/ExpensesContext';
import DayExpenses from './DayExpenses';



const BarChart = () =>  {

    const { expenses,average, max, today } = useExpensesContext();
    const expensesList = expenses.map(expense => expense.expense)

    const colorDay = expenses.map(expense => {
       return expense.day===today ? '#007cb7' : '#F97316'
    })
    
    const days = ["Dl", "Dm", "Dc", "Dj", "Dv", "Ds", "Dg"];
    
    const myOptions = {
        responsive : true,
        animation : true,
        plugins : {
            legend : {
                display : false
            }
        },
        scales : {
            y : {
                min:0,
            },
            
            x: {
                ticks: { 
                    color: '#808080',
                    
                }
            },
        }
    };
    
    const myData = {
        labels: days,
        datasets: [
            {
               
                data: expensesList,
                backgroundColor: colorDay,
                borderRadius: 6
            }
        ]
    };
return(
<div className='bg-gray-200 rounded-lg px-4 py-4 '>
<Bar data={myData} options={myOptions} />
<DayExpenses />
</div>

)
}

export default BarChart