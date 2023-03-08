import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useDataContext } from "../context/DataContext.jsx";

function DisplayCharts() {
    const {jsonData} = useDataContext()
    //console.log('jsonData from DisplayCharts', jsonData);
    return (
        <Grid
            w={'100vw'}
            h={'100vh'}
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
        </Grid>
    )
}
export default DisplayCharts