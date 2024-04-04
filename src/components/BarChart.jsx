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



const BarChart = () =>  {

    const { expenses,average, max, today } = useExpensesContext();
    const expensesList = expenses.map(expense => expense.expense)

    const colorDay = expenses.map(expense => {
       return expense.day===today ? '#007cb7' : '#F97316'
    })
    
    const days = ["Dl", "Dm", "Dc", "Dj", "Dv", "Ds", "Dg"];
    const colors = ['#F97316','#F97316','#F97316','#F97316','#F97316','#F97316','#007cb7']
    
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
                max:max + 10,
                type:"linear",
                
                ticks: {
                    stepSize: average
                  }
            },
            
            x: {
                ticks: { color: '#808080'}
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
return <Bar data={myData} options={myOptions} />
}

export default BarChart