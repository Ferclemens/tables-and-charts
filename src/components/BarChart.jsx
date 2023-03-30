import { HStack, Select, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
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
import { countDuplicates } from './ProcessDataToCharts';

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
    scales: {
      x: {
        grid: {
          color: 'rgba(225,190,129,0.8)',
          borderColor: 'rgba(225,190,129,0.8)',
          tickColor: 'rgba(225,190,129,0.8)'
        },
        ticks: {
          color: 'rgba(225,190,129,0.8)',
        }
      },
      y: {
        grid: {
          color: 'rgba(225,190,129,0.8)',
          borderColor: 'rgba(225,190,129,0.8)',
          tickColor: 'rgba(225,190,129,0.8)'
        },
        ticks: {
          color: 'rgba(225,190,129,0.8)',
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparación de costos',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function BarChart() {
/*     const {jsonData, tableData} = useDataContext()
    console.log('jsonData from BarChart', jsonData);
    console.log('tableData from BarChart', tableData); */
    const {chartAreaData, chartData} = useDataContext()
    //console.log('CHART DATA', chartAreaData);
    const selectYear = chartData ? Object.keys(countDuplicates(chartData.año)) : ['Select year']
    const [select1, setSelect1] = useState('año')
    const [select2, setSelect2] = useState('año')
    const [yearDataSet1, setYearDataSet1] = useState([1, 2, 3])
    const [monthDataSet1, setMonthDataSet1] = useState([1, 2, 3])
    const [yearDataSet2, setYearDataSet2] = useState([1, 2, 3])
    const [monthDataSet2, setMonthDataSet2] = useState([1, 2, 3])
    //console.log('DATA CHART YEAR RENDER',yearDataSet1)
    //console.log('DATA CHART MONTH RENDER',monthDataSet1);
    const breakPoint = useBreakpointValue({base: '100vw', md: '50vw'})
    
    const handleChangeSelect1 = (event) => {
      setSelect1(event.target.value)
    }
    const handleChangeSelect2 = (event) => {
      setSelect2(event.target.value)
    }
    const dataForChartAccordingToYear = (dataBase, yearSelected) => {
      let data = dataBase.filter((item) => item.Año === yearSelected)
      return data
    }
    const totalSellsAccordingToMonth = (array) => {
      let january = 0
      let february = 0
      let march = 0
      let april = 0
      let may = 0
      let june = 0
      let july = 0
      let august = 0
      let september = 0
      let october = 0
      let november = 0
      let december = 0
  
      array.map((item) => {
        if(item.Mes === "1"){
          january += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "2"){
          february += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "3"){
          march += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "4"){
          april += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "5"){
          may += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "6"){
          june += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "7"){
          july += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "8"){
          august += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "9"){
          september += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "10"){
          october += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "11"){
          november += Math.floor(item.Importe_coste_total) 
        }
        if(item.Mes === "12"){
          december += Math.floor(item.Importe_coste_total) 
        }
      })
      let dataMonth = 
      {
        'January' : january,
        'February' : february,
        'March' : march,
        'April' : april,
        'May' : may,
        'June' : june,
        'July' : july,
        'August' : august,
        'September' : september,
        'October' : october,
        'November' : november,
        'December' : december,
      }
      return dataMonth
    }
  
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: select1,
          data: monthDataSet1,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.9)',
        },
        {
          fill: true,
          label: select2,
          data: monthDataSet2,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.9)',
        },
      ],
    }
  
    useEffect(() => {
      const setYearData = async () => {
        const dataArray = await dataForChartAccordingToYear(chartAreaData, select1)
        setYearDataSet1(dataArray)    
      }
      setYearData()
    }, [select1])
  
    useEffect(() => {
      const setYearData = async () => {
        const dataArray = await dataForChartAccordingToYear(chartAreaData, select2)
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
    <VStack h={'50vh'} width={'91vw'} p={'1'}>
      <HStack>
      <Stack>
        <Text>Data set 1</Text>
        <Select onChange={handleChangeSelect1}>
          {selectYear.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
      </Stack>
      <Stack>
        <Text>Data set 2</Text>
        <Select onChange={handleChangeSelect2}>
          {selectYear.map((title) => {
            return <option key={title} value={title}>{title}</option>
          })}
        </Select>
      </Stack>
      </HStack>
      <Bar options={options} data={data} />
    </VStack>
  )
}

export default BarChart

