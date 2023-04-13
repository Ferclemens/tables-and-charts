import { ButtonGroup, Flex, Grid, GridItem, Link, Spacer, Text, useBreakpointValue } from '@chakra-ui/react'
import ReadFile from './components/ReadFile'
import ShowTable from './components/ShowTable'
import { useDataContext } from './context/DataContext.jsx';
import '../styles.css'

function App() {
  const {tableData} = useDataContext()
  const titleSize = useBreakpointValue({base: '3xl', md: '4xl'})
  const titleDirection = useBreakpointValue({base: 'column-reverse', md: 'row'}) 
  return (
      <Grid
        templateAreas={`"header header"
                        "nav nav"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={'1fr 1.2fr 8fr 0.8fr'}
        gridTemplateColumns={'1fr'}
        h='100vh'
        w='100vw'
        color='yellow.500'
        fontWeight='bold'
        bg='rgba(11,7,3,1)'

      >
        <GridItem p={'2'} bgGradient='linear(to-r, blackAlpha.100, blackAlpha.100, teal.900)' area={'header'}>
          <Flex mx={'6'} alignItems={'center'} flexDirection={titleDirection} gap={'2'}>
          <Text fontSize={titleSize} fontWeight={'bold'} textAlign={'center'} >Table-Chart App</Text>
          <Spacer></Spacer>
          <ButtonGroup gap={'4'}>
          <Link href='https://github.com/Ferclemens' isExternal>
          <img className='img--contact' src={'./GithubImg.png'}></img></Link>
          <Link href='https://www.linkedin.com/in/foclemens/' isExternal><img className='img--contact' src={'./LinkedinImg.png'}/></Link>
          </ButtonGroup>
          </Flex>
        </GridItem>
        <GridItem p={'1'} area={'nav'} pt={'2'}>
          <ReadFile/>
        </GridItem>
        <GridItem p={'0.5'} area={'main'} overflow={'scroll'}>
          {tableData != null ? 
            <ShowTable/> : 
            <Text fontSize={'3xl'} textAlign={'center'} my={'10%'}>Su tabla se desplegara aquí...</Text>
          }
        </GridItem>
        <GridItem bgGradient='linear(to-r, teal.900,blackAlpha.100, blackAlpha.100 )' area={'footer'} w={'100vw'}>
          <Text fontSize={'sm'} textAlign={'end'} mr={'3'} mt={'2'}>Fer Clemens - foclemens@gmail.com </Text>
        </GridItem>
      </Grid>
    )
  }
  
  export default App
