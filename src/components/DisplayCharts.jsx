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
        <Flex flexDirection={'column'}>
            <Box height={'150px'} bg={'teal.200'}>
                <Text textAlign={'center'}>OPTIONS</Text>
            </Box>
            <Flex flexDirection={breakPoint} height={'370px'}>
                <Box bg={'yellow.200'}>
                    <DonutChart/>
                </Box>
                <Box bg={'blue.200'}>
                    <RadarChart/>
                </Box>
            </Flex>
            <Flex flexDirection={breakPoint}>
                <Box bg={'red.100'}>
                    <AreaChart/>
                </Box>
                <Box bg={'green.200'}>
                    <BarChart/>
                </Box>
            </Flex>
        </Flex>
    )
}
export default DisplayCharts