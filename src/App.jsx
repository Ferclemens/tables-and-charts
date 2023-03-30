import { Button, ButtonGroup, Flex, Grid, GridItem, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react'
import ReadFile from './components/ReadFile'
import ShowTable from './components/ShowTable'
import { useDataContext } from './context/DataContext.jsx';
import '../styles.css'

function App() {
  const {tableData} = useDataContext()
  return (
      <Grid
        templateAreas={`"header header"
                        "nav nav"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={'1fr 1.2fr 8fr 40px'}
        gridTemplateColumns={'1fr'}
        h='100vh'
        w='100vw'
        color='yellow.500'
        fontWeight='bold'
        bg='blackAlpha.900'
      >
        <GridItem p={'1'} bgGradient='linear(to-r, blackAlpha.100, yellow.800)' area={'header'}>
          <Flex mr={'14'} alignItems={'center'}>
          <Text fontSize={'4xl'} >Table-Chart App</Text>
          <Spacer></Spacer>
          <ButtonGroup gap={'4'}>
          <Link href='https://github.com/Ferclemens' isExternal>
          <img className='img--LinkedIn' src={'../public/GithubImg.png'}></img></Link>
          <Link href='https://www.linkedin.com/in/foclemens/' isExternal><img className='img--LinkedIn' src={'../public/LinkedinImg.png'}/></Link>
          </ButtonGroup>
          </Flex>
        </GridItem>
        <GridItem p={'1'} area={'nav'} pt={'2'}>
          <ReadFile/>
        </GridItem>
        <GridItem p={'0.5'} area={'main'} overflow={'scroll'}>
          {tableData != null ? 
            <ShowTable/> : 
            <Text fontSize={'3xl'} textAlign={'center'} my={'44'}>Your table render here...</Text>
          }
        </GridItem>
        <GridItem bgGradient='linear(to-r, yellow.800,blackAlpha.100 )' area={'footer'} position={'fixed'} bottom={0} w={'100vw'} h={'40px'}>
          
          <Text fontSize={'sm'} textAlign={'end'} mr={'14'} mt={'1'}>Made with Chakra UI - Fer Clemens developer </Text>
        </GridItem>
      </Grid>
    )
  }
  
  export default App
