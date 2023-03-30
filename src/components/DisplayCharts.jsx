import { Box, ButtonGroup, Flex, Grid, GridItem, HStack, Link, MenuOptionGroup, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";
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
        <Flex flexDirection={'column'} bgGradient='linear(to-r, blackAlpha.900, yellow.900)' color={'yellow.500'} >
          <Flex mx={'14'} alignItems={'center'} >
            <Text fontSize={'4xl'} fontWeight='bold'>Charts display and comparison</Text>
            <Spacer></Spacer>
            <ButtonGroup gap={'4'}>
            <Link href='https://github.com/Ferclemens' isExternal>
            <img className='img--LinkedIn' src={'../public/GithubImg.png'}></img></Link>
            <Link href='https://www.linkedin.com/in/foclemens/' isExternal><img className='img--LinkedIn' src={'../public/LinkedinImg.png'}/></Link>
            </ButtonGroup>
          </Flex>
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