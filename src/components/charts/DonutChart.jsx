import { Select, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDataContext } from '../../context/DataContext.jsx';
import { selectLabelOption } from '../../Utilities';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
      text: 'Gráfico tipo dona',
    },
  },
};

function DonutChart() {
  const {chartData} = useDataContext()
  const selectArray = chartData ? ['zona', 'producto', 'canalDeVenta', 'prioridad'] : ['Seleccionar opción']
  const [select, setSelect] = useState('zona')
  const [labelsChart, setLabelsChart] = useState(['opción 1','opción 2', 'opción 3'])
  const [dataChart, setDataChart] = useState([1, 2, 3])  
  
  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  const data = {
    labels: labelsChart,
    datasets: [
      {
        label: 'unidades',
        data: dataChart,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(110, 134, 26, 0.7)',
          'rgba(26, 80, 134, 0.7)',
          'rgba(183, 92, 56, 0.7)',
          'rgba(119, 56, 183, 0.7)',
          'rgba(208, 167, 41, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(110, 134, 26, 1)',
          'rgba(26, 80, 134, 1)',
          'rgba(183, 92, 56, 1)',
          'rgba(119, 56, 183, 1)',
          'rgba(208, 167, 41, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  useEffect(() => {
    const labelArray = chartData && select ? Object.keys(selectLabelOption(chartData,select)) : ['opción 1','opción 2', 'opción 3']
    const dataArray = chartData && select ? Object.values(selectLabelOption(chartData,select)) : [1, 2, 3]
    setLabelsChart(labelArray)
    setDataChart(dataArray)    
  }, [select])
  
  return (
    <VStack h={'90vh'} width={'91vw'} position={'relative'}>
      <Stack w={'300px'}>
        <Select value={select} onChange={handleChange} pt={'3'} bg={'blackAlpha.200'}>
            {selectArray.map((title) => {
              return <option key={title} value={title}>{title}</option>
            })}
          </Select>
      </Stack>
        <Doughnut data={data} options={options} />
    </VStack>
  )
}
export default DonutChart