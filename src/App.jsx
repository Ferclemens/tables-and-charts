import { Button, ButtonGroup, Flex, Grid, GridItem, Image, Link, Spacer, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import ReadFile from './components/ReadFile'
import ShowTable from './components/ShowTable'
import { useDataContext } from './context/DataContext.jsx';
import '../styles.css'

function App() {
  const {tableData} = useDataContext()
  const titleSize = useBreakpointValue({base: '3xl', md: '5xl'})
  return (
      <Grid
        templateAreas={`"header header"
                        "nav nav"
                        "main main"
                        "footer footer"`}
        gridTemplateRows={'1fr 1.2fr 8fr 24px'}
        gridTemplateColumns={'1fr'}
        h='100vh'
        w='100vw'
        color='yellow.500'
        fontWeight='bold'
        bg='rgba(11,7,3,1)'

      >
        <GridItem p={'1'} bgGradient='linear(to-r, blackAlpha.100, blackAlpha.100, yellow.800)' area={'header'}>
          <Flex mr={'14'} alignItems={'center'}>
          <Text fontSize={titleSize} fontWeight={'bold'} textAlign={'center'} >Table-Chart App</Text>
          <Spacer></Spacer>
          <ButtonGroup gap={'4'}>
          <Link href='https://github.com/Ferclemens' isExternal>
          <img className='img--contact' src={'../GithubImg.png'}></img></Link>
          <Link href='https://www.linkedin.com/in/foclemens/' isExternal><img className='img--contact' src={'../LinkedinImg.png'}/></Link>
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
        <GridItem bgGradient='linear(to-r, yellow.800,blackAlpha.100, blackAlpha.100 )' area={'footer'} position={'fixed'} bottom={0} w={'100vw'} >
          
          <Text fontSize={'sm'} textAlign={'end'} mr={'3'} mb={'1'}>Made with Chakra UI - Fer Clemens developer - foclemens@gmail.com </Text>
        </GridItem>
      </Grid>
    )
  }
  
  export default App
