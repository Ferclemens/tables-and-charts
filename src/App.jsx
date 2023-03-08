import { Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import './App.css'
import ReadFile from './components/ReadFile'
import ShowTable from './components/ShowTable'
import DisplayCharts from './components/DisplayCharts';
import { useDataContext } from './context/DataContext.jsx';

function App() {
  const {tableData} = useDataContext()
  return (
      <Grid
        templateAreas={`"header header"
                        "nav nav"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={'50px 80px 1fr 40px'}
        gridTemplateColumns={'150px 1fr'}
        h='100vh'
        w='100vw'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='teal.200' area={'nav'}>
          <ReadFile/>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'} overflow={'scroll'}>
          {tableData != null ? 
            <ShowTable/> : 
            <Text fontSize={'3xl'} textAlign={'center'} my={'44'}>Your table render here...</Text>
          }
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'} position={'fixed'} bottom={0} w={'100vw'} h={'40px'}>
          Footer
        </GridItem>
      </Grid>
    )
  }
  
  export default App
