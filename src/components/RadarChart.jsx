import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Select, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContext';
import { selectLabel } from './ProcessDataToCharts';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6']
export const data = {
  labels,
  datasets: [
    {
      label: '# of Votes',
      data: labels.map(() => Math.random() * 100),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

function RadarChart() {
  const {chartData} = useDataContext()
  //console.log('chartData from Radar chart', chartData);
  //relevante: zona - producto - canalDeVenta - prioridad 
  const selectArray = chartData ? ['zona', 'producto', 'prioridad'] : ['Select options']
  const [select, setSelect] = useState('zona')
  const [labelsChart, setLabelsChart] = useState(['option-1','option-2', 'option-3'])
  const [dataChart, setDataChart] = useState([1, 2, 3])
  const breakPoint = useBreakpointValue({base: '100vw', md: '50vw'})

  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  const labels = labelsChart
  const data = {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data: dataChart,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const labelArray = chartData && select ? Object.keys(selectLabel(chartData,select)) : ['option-1','option-2', 'option-3']
    const dataArray = chartData && select ? Object.values(selectLabel(chartData,select)) : [1, 2, 3]
    setLabelsChart(labelArray)
    setDataChart(dataArray)    
  }, [select])

  return (
    <VStack height={'316px'} width={breakPoint} p={'1'}>
      <Select value={select} onChange={handleChange}>
        {selectArray.map((title) => {
          return <option key={title} value={title}>{title}</option>
        })}
      </Select>
      <Radar data={data} />
    </VStack>
  )
}
export default RadarChart