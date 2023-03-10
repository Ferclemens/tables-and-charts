import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useDataContext } from "../context/DataContext.jsx";
import AreaChart from "./AreaChart.jsx";
import BarChart from "./BarChart.jsx";
import DonutChart from "./DonutChart.jsx";

function DisplayCharts() {
/*     const {jsonData, tableData} = useDataContext()
    console.log('jsonData from DisplayCharts', jsonData);
    console.log('tableData from DisplayCharts', tableData); */

    return (
        <Grid
            templateAreas={`"settings donut area"
                            "settings bar bar"`}
            gridTemplateRows={'320px 1fr'}
            gridTemplateColumns={'250px 1fr 1fr'}
            gap='1'
            margin='0.5'
            color='blackAlpha.700'
            fontWeight='bold'
      >
            <GridItem bg='teal' area={'settings'}></GridItem>
            <GridItem  bg='papayawhip' area={'donut'}>
                <DonutChart/>
            </GridItem>
            <GridItem  bg='green.200' area={'area'}>
                <AreaChart/>
            </GridItem>
            <GridItem bg='blue.100' area={'bar'}>
                <BarChart/>
            </GridItem>
        </Grid>
    )
}
export default DisplayCharts