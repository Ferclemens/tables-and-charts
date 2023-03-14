import { Select, useBreakpointValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDataContext } from '../context/DataContext';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Donut Chart',
    },
  },
};

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
function DonutChart() {
  const {jsonData, tableData} = useDataContext()
  const titlesArray = tableData ? Object.keys(tableData[0]) : ['option-1','option-2']
  console.log('jsonData from DonutChart', jsonData);
  console.log('tableData from DonutChart', tableData);
  const breakPoint = useBreakpointValue({base: '100vw', md: '50vw'})
  return (
    <VStack height={'316px'} width={breakPoint} p={'1'}>
        <Select placeholder='Select data'>
          {titlesArray.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
        <Doughnut data={data} options={options} />
    </VStack>
  )
}
export default DonutChart