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

const expenses = [120, 340, 210, 220, 123, 150, 205, 30];
const days = ["Dl", "Dm", "Dc", "Dj", "Dv", "Ds", "Dg"];
const colors = ['#ff5f00','#ff5f00','#ff5f00','#ff5f00','#ff5f00','#ff5f00','#007cb7']

const average = (expenses.reduce((a,b) => a+b,0))/expenses.length
const max = Math.max(...expenses)
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
            label: 'Gastos',
            data: expenses,
            backgroundColor: colors,
            borderRadius: 10
        }
    ]
};

const BarChart = () =>  {
    return <Bar data={myData} options={myOptions} />
}

export default BarChart