import { Box, Button, ButtonGroup, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import AreaChart from "./AreaChart.jsx";
import BarChart from "./BarChart.jsx";
import DonutChart from "./DonutChart.jsx";
import RadarChart from "./RadarChart.jsx";
import { Link } from "react-router-dom";

function DisplayCharts() {
    const direction = useBreakpointValue({base: 'column-reverse', md: 'row'})
    const titleSize = useBreakpointValue({base: '3xl', md: '4xl'})
    return (
        <Flex flexDirection={'column'} bgGradient='linear(to-r, blackAlpha.900, yellow.900)' color={'yellow.500'} >
          <Flex mx={'14'} my={'2'} alignItems={'center'} justifyContent={'space-between'} flexDirection={direction} gap={'4'}>
            <Text fontSize={titleSize} fontWeight={'bold'} textAlign={'center'}>Charts display and comparison</Text>
            <ButtonGroup gap={'4'} width={'120px'}>
            <a href='https://github.com/Ferclemens' target='_blank' rel="noopener noreferrer">
            <img className='img--contact' src={'../public/GithubImg.png'}></img></a>
            <a href='https://www.linkedin.com/in/foclemens/' target='_blank' rel="noopener noreferrer"><img className='img--contact' src={'../public/LinkedinImg.png'}/></a>
            </ButtonGroup>
          </Flex>
          <Flex alignItems={'flex-start'}>
          <Link to="/">
                <Button 
                size={'lg'}
                ml={'4vw'}
                my={'2'} 
                boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;'} 
                p='3' 
                rounded='md' 
                bg='yellow.800'
                _hover={{
                    background: "yellow.500",
                    color: 'yellow.800'
                }}
                ><img src="./public/arrowLeft.png" className="img--back--tables"></img>Tables</Button></Link>
          </Flex>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'100vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <RadarChart/>
                </Box>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'100vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <DonutChart/>
                </Box>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'100vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <AreaChart/>
                </Box>
                <Box bg={'blackAlpha.800'} borderRadius={'5'} h={'100vh'} m={'2'} boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -4px -4px 0px inset;'}>
                    <BarChart/>
                </Box>
            </Flex>
        </Flex>
    )
}
export default DisplayCharts