import { Box, Flex, Grid, GridItem, HStack, MenuOptionGroup, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useDataContext } from "../context/DataContext.jsx";
import AreaChart from "./AreaChart.jsx";
import BarChart from "./BarChart.jsx";
import DonutChart from "./DonutChart.jsx";
import RadarChart from "./RadarChart.jsx";

function DisplayCharts() {
    //const {jsonData, tableData} = useDataContext()
    //console.log('jsonData from DisplayCharts', jsonData);
    //console.log('tableData from DisplayCharts', tableData);
    const breakPoint = useBreakpointValue({base: 'column', md: 'row'})
    return (
        <Flex flexDirection={'column'} backgroundColor={'#0f0e17'} w={'100vw'} gap={'4'}>
            <Text textAlign={'center'} color={'whiteAlpha.700'} fontSize={'5xl'} >Gráficos de comparación y análisis</Text>
            <Flex flexDirection={breakPoint} justifyContent={'space-evenly'} height={'390px'} >
                <Box bg={'blue.100'} borderRadius={'5'} >
                    <RadarChart/>
                </Box>
                <Box bg={'blue.100'} borderRadius={'5'}>
                    <DonutChart/>
                </Box>
            </Flex>
            <Flex flexDirection={breakPoint}>
                <Box bg={'green.100'} height={'400px'}>
                    <AreaChart/>
                </Box>
                <Box bg={'green.100'} height={'400px'}>
                    <BarChart/>
                </Box>
            </Flex>
        </Flex>
    )
}
export default DisplayCharts