import React from 'react';
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
import { useBreakpointValue, VStack } from '@chakra-ui/react';

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
  const breakPoint = useBreakpointValue({base: '100vw', md: '50vw'})
  return (
    <VStack height={'316px'} width={breakPoint} p={'1'}>
        <Radar data={data} />
    </VStack>
  )
}
export default RadarChart