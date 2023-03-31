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
    const direction = useBreakpointValue({base: 'column-reverse', md: 'row'})
    const titleSize = useBreakpointValue({base: '3xl', md: '5xl'})
    return (
        <Flex flexDirection={'column'} bgGradient='linear(to-r, blackAlpha.900, yellow.900)' color={'yellow.500'} >
          <Flex mx={'14'} my={'2'} alignItems={'center'} justifyContent={'space-between'} flexDirection={direction} gap={'4'}>
            <Text fontSize={titleSize} fontWeight={'bold'} textAlign={'center'}>Charts display and comparison</Text>
            <ButtonGroup gap={'4'} width={'120px'}>
            <Link href='https://github.com/Ferclemens' isExternal>
            <img className='img--contact' src={'../public/GithubImg.png'}></img></Link>
            <Link href='https://www.linkedin.com/in/foclemens/' isExternal><img className='img--contact' src={'../public/LinkedinImg.png'}/></Link>
            </ButtonGroup>
          </Flex>
            <Flex flexDirection={breakPoint} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'65vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <RadarChart/>
                </Box>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'65vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <DonutChart/>
                </Box>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'65vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <AreaChart/>
                </Box>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'65vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <BarChart/>
                </Box>
            </Flex>
        </Flex>
    )
}
export default DisplayCharts