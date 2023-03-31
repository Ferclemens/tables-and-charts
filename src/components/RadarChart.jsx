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
import { Select, Stack, useBreakpointValue, VStack } from '@chakra-ui/react';
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

export const options = {
  responsive: true,
  aspectRatio: 2,
  scales: {
    r: {
      pointLabels: {
        color: 'rgba(219,161,47,1)'
      },
      angleLines: {
        color: 'rgba(219,161,47,1)'
      },
      grid: {
        color: 'rgba(219,161,47,1)'
      },
      ticks: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Gráfico tipo radar',
    },
  },
};

function RadarChart() {
  const {chartData} = useDataContext()
  //console.log('chartData from Radar chart', chartData);
  //relevante: zona - producto - canalDeVenta - prioridad 
  const selectArray = chartData ? ['zona', 'producto'] : ['Select options']
  const [select, setSelect] = useState('zona')
  const [labelsChart, setLabelsChart] = useState(['option-1','option-2', 'option-3'])
  const [dataChart, setDataChart] = useState([1, 2, 3])
  const breakPoint = useBreakpointValue({base: '91vw', md: '45vw'})

  const handleChange = (event) => {
    setSelect(event.target.value)
  }

  const labels = labelsChart
  const data = {
    labels,
    datasets: [
      {
        label: 'unidades',
        data: dataChart,
        backgroundColor: 'rgba(255, 99, 132, 0.9)',
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
    <VStack h={'50vh'} width={breakPoint} position={'relative'}>
      <Stack w={'300px'}>
        <Select value={select} onChange={handleChange} pt={'2'} bg={'blackAlpha.200'}>
          {selectArray.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
      </Stack>
      <Radar data={data} options={options}/>
    </VStack>
  )
}
export default RadarChart