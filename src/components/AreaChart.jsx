import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Flex, Select, Stack, VStack } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContext';
import { countDuplicates, dataForChartAccordingToYear, totalSellsAccordingToMonth } from '../Utilities';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: 'rgba(219,161,47,1)',
        borderColor: 'rgba(219,161,47,1)',
        tickColor: 'rgba(219,161,47,1)'
      },
      ticks: {
        color: 'rgba(219,161,47,1)',
      }
    },
    y: {
      grid: {
        color: 'rgba(219,161,47,1)',
        borderColor: 'rgba(219,161,47,1)',
        tickColor: 'rgba(219,161,47,1)'
      },
      ticks: {
        color: 'rgba(219,161,47,1)',
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'YEAR SELLS',
      color: 'rgba(219,161,47,1)', 
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



function AreaChart() {
  const {cartesianChartData, chartData} = useDataContext()
  console.log('CARTESIAN DATA', cartesianChartData);
  const selectYear = chartData ? Object.keys(countDuplicates(chartData.año)) : ['Select year']
  const [select1, setSelect1] = useState('año')
  const [select2, setSelect2] = useState('año')
  const [yearDataSet1, setYearDataSet1] = useState([1, 2, 3])
  console.log('YEAR DATASET', yearDataSet1);
  const [monthDataSet1, setMonthDataSet1] = useState([1, 2, 3])
  const [yearDataSet2, setYearDataSet2] = useState([1, 2, 3])
  const [monthDataSet2, setMonthDataSet2] = useState([1, 2, 3])
  
  const handleChangeSelect1 = (event) => {
    setSelect1(event.target.value)
  }
  const handleChangeSelect2 = (event) => {
    setSelect2(event.target.value)
  }
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: select1,
        data: monthDataSet1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.6)',
      },
      {
        fill: true,
        label: select2,
        data: monthDataSet2,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
    ],
  }

  useEffect(() => {
    const setYearData = async () => {
      const dataArray = await dataForChartAccordingToYear(cartesianChartData, select1)
      setYearDataSet1(dataArray)    
    }
    setYearData()
  }, [select1])

  useEffect(() => {
    const setYearData = async () => {
      const dataArray = await dataForChartAccordingToYear(cartesianChartData, select2)
      setYearDataSet2(dataArray)    
    }
    setYearData()
  }, [select2])

  useEffect(() => {
    const setSellsData = () => { 
      const dataMonth =  totalSellsAccordingToMonth(yearDataSet1)
      setMonthDataSet1(dataMonth)
    }
    setSellsData()
  }, [yearDataSet1])

  useEffect(() => {
    const setSellsData = () => { 
      const dataMonth =  totalSellsAccordingToMonth(yearDataSet2)
      setMonthDataSet2(dataMonth)
    }
    setSellsData()
  }, [yearDataSet2])

  return (
    <VStack h={'85%'} width={'91vw'} p={'1'} position={'relative'}>
      <Flex gap={'2'}>
      <Stack w={'230px'}>
        <Select onChange={handleChangeSelect1} pt={'2'}>
          {selectYear.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
      </Stack>
      <Stack w={'230px'}>
        <Select onChange={handleChangeSelect2} pt={'2'}>
          {selectYear.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
      </Stack>
      </Flex>
      <Line options={options} data={data} />
    </VStack>
  )
}

export default AreaChart