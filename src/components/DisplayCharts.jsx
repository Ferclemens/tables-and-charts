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
        <Flex flexDirection={'column'} backgroundColor={'#0f0e17'} color={'orange.200'}>
            <Text textAlign={'center'}  fontSize={'5xl'} >Gráficos de comparación y análisis</Text>
            <Flex flexDirection={breakPoint} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'rgba(115, 113, 106, 0.3)'} borderRadius={'5'} h={'65vh'} m={'2'}>
                    <RadarChart/>
                </Box>
                <Box bg={'rgba(115, 113, 106, 0.3)'} borderRadius={'5'} h={'65vh'} m={'2'}>
                    <DonutChart/>
                </Box>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'rgba(115, 113, 106, 0.3)'} borderRadius={'5'} h={'65vh'} m={'2'}>
                    <AreaChart/>
                </Box>
                <Box bg={'rgba(115, 113, 106, 0.3)'} borderRadius={'5'} h={'65vh'} m={'2'}>
                    <BarChart/>
                </Box>
            </Flex>
        </Flex>
    )
}
export default DisplayCharts