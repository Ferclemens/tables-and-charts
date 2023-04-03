import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Img, Input, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { read, utils } from 'xlsx';
import { useDataContext } from "../context/DataContext.jsx";
import { Link } from "react-router-dom";
import { countDuplicates, getItemsArray, getMonth, getYear } from "./ProcessDataToCharts.jsx";

//----ORO PURO
//Format date type number from Excel to Date() object Javascript
export function ExcelDateToJSDate(serial) {
    let utc_days  = Math.floor(serial - 25568);
    let utc_value = utc_days * 86400;                                        
    let date_info = new Date(utc_value * 1000);
    
    let fractional_day = serial - Math.floor(serial) + 0.0000001;
    let total_seconds = Math.floor(86400 * fractional_day);
    let seconds = total_seconds % 60;
    total_seconds -= seconds;
    
    //let hours = Math.floor(total_seconds / (60 * 60));
    //let minutes = Math.floor(total_seconds / 60) % 60;
    
    let dateFormated = `${date_info.getDate()}-${date_info.getMonth()+1}-${date_info.getFullYear()}` 
    return dateFormated
    }

const ReadFile = () => {
    const {setJsonData, setTableColumns, setTableData, setChartData, setChartAreaData} = useDataContext()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const formatColumns = (data) => {
        const columnsArray = Object.keys(data[0])
        const columns = []
        columnsArray.map((title) => {
            return columns.push({
                Header: title,
                accessor: title,   
            })
        })
        return columns
    }
    

     function numberAmountToPesoFormat(amount) {
            const formatPeso = new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 2,
            }).format(amount);
            return formatPeso;
     }

     //Format data for Print Table
    function FormatData(data) {
        const dataJsonFormated = []
        data.map((item) => {
            const dateSendFormated = ExcelDateToJSDate(item.Fecha_envio)
            const dateRequestFormated = ExcelDateToJSDate(item.Fecha_pedido)
            const unitCostFormated = numberAmountToPesoFormat(item.Coste_unitario)
            const unitPriceFormated = numberAmountToPesoFormat(item.Precio_unitario)
            const totalCostFormated = numberAmountToPesoFormat(item.Importe_coste_total)
            const totalSaleFormated = numberAmountToPesoFormat(item.Importe_venta_total)
            //Fecha_envio because understand if send product, is a sell concreted.
            const yearSell = getYear(item.Fecha_envio)
            const monthSell = getMonth(item.Fecha_envio)
                
            return dataJsonFormated.push({
                ...item,
                Coste_unitario : unitCostFormated,
                Precio_unitario : unitPriceFormated, 
                Importe_coste_total : totalCostFormated,
                Importe_venta_total : totalSaleFormated,
                Fecha_envio : dateSendFormated,
                Fecha_pedido : dateRequestFormated,
                Año : yearSell,
                Mes : monthSell
            })

        })
        //console.log('DATE FORMATED Json', dataJsonFormated);
        return dataJsonFormated
    }
    function FormatDataToAreaChart(data) {
        const dataJsonFormated = []
        data.map((item) => {
            const dateSendFormated = ExcelDateToJSDate(item.Fecha_envio)
            const dateRequestFormated = ExcelDateToJSDate(item.Fecha_pedido)
            const yearSell = getYear(item.Fecha_envio)
            const monthSell = getMonth(item.Fecha_envio)
                
            return dataJsonFormated.push({
                ...item,
                Fecha_envio : dateSendFormated,
                Fecha_pedido : dateRequestFormated,
                Año : yearSell,
                Mes : monthSell
            })

        })
        console.log('DATE FORMATED Json PARA AREA', dataJsonFormated);
        return dataJsonFormated
    }

    const handleFile = async (e) => {
        const file = e.target.files[0] //guardamos el evento en una constante
        const data = await file.arrayBuffer() //creamos un array buffer para leerlo
        const workbook = read(data)
        
        const workSheet = workbook.Sheets[workbook.SheetNames[0]] //determinamos como key de cada atributo del objeto Json a la primera fila de la planilla
        const dataJson = utils.sheet_to_json(workSheet) //convertimos a json la planilla
        
        //console.log('DATA', dataJson)
        setJsonData(dataJson)
        //console.log('DATAJSON', dataJson);
        setTableColumns(formatColumns(dataJson))
        setTableData(FormatData(dataJson))
        const arrays = getItemsArray(FormatData(dataJson))
        //console.log('getItemsArray()',arrays);
        setChartData(arrays)
        const areaChartData = FormatDataToAreaChart(dataJson)
        setChartAreaData(areaChartData)

    }
    return (
        <HStack justifyContent={'center'} alignItems={'center'}>
            <ButtonGroup gap={'4'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
            <Button 
             onClick={onOpen}
             size={'lg'} 
             boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;'} 
             p='3' 
             rounded='md' 
             bg='yellow.800'
             _hover={{
                 background: "yellow.500",
                 color: 'yellow.800'
             }}
             >
               <Text>Instructions</Text>
            </Button>
            <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg='rgba(11,7,3,1)' color='yellow.500'>
                <DrawerHeader fontSize={'2xl'}>Instrucciones de uso</DrawerHeader>
                <DrawerBody p={'8'} fontSize={'xl'}>
                    <Text >La app esta optimizada para el archivo xlsx "Listado de registro de ventas de productos en Excel" (es el último ejemplo) que lo pueden descargar desde <a href="https://buscarv.com/plantillas/listados-con-datos-de-ejemplo-para-descargar/#Listado_de_registro_de_ventas_de_productos_en_Excel" target='_blank' rel="noopener noreferrer">https://buscarv.com/plantillas/listados-con-datos-de-ejemplo-para-descargar/#Listado_de_registro_de_ventas_de_productos_en_Excel</a></Text>
                    <Text>Una vez descargado, lo suben desde el boton "Upload xlsx file".
                    Se despliega la tabla en el navegador donde pueden navegar entre las páginas de la tabla, o buscar datos específicos con el buscador. Si van al boton "Charts" pueden ver comparaciones gráficas de los datos cargados.</Text>
                    <Text>Mientras se respeten los encabezados de la tabla, la app funciona correctamente. Por lo tanto pueden tabular datos reales de su empresa con esos encabezados y verlos en el browser.</Text>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Box 
            position={'relative'} 
            boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;'} 
            p='3' 
            rounded='md' 
            bg='yellow.800'
            _hover={{
                    background: "yellow.500",
                    color: 'yellow.800'
                }}
            >
                <label className="load--label" for='file-upload'>Upload xlsx File</label>
                <input className="load--file" type='file' id='file-upload' onChange={(e) => handleFile(e)} position={'absolute'}></input>
            </Box>
            <Link to="charts">
                <Button 
                size={'lg'}  
                boxShadow={'rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;'} 
                p='3' 
                rounded='md' 
                bg='yellow.800'
                _hover={{
                    background: "yellow.500",
                    color: 'yellow.800'
                }}
                >Charts</Button></Link>
            </ButtonGroup>
        </HStack>
    )
}

export default ReadFile
