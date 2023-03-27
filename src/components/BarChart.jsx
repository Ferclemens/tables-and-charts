import { useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useDataContext } from '../context/DataContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * 100),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * 100),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

function BarChart() {
/*     const {jsonData, tableData} = useDataContext()
    console.log('jsonData from BarChart', jsonData);
    console.log('tableData from BarChart', tableData); */
  const breakPoint = useBreakpointValue({base: '100vw', md: '50vw'})
  return (
    <VStack height={'316px'} width={breakPoint} p={'1'}>
        <Bar options={options} data={data} />
    </VStack>
  )
}

export default BarChart