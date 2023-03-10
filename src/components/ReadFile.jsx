import { Button, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { read, utils } from 'xlsx';
import { useDataContext } from "../context/DataContext.jsx";
import { Link, NavLink } from "react-router-dom";


const ReadFile = () => {
    const {setJsonData, setTableColumns, setTableData} = useDataContext() 

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
    //----ORO PURO
    //Format date type number from Excel to Date() object Javascript
    function ExcelDateToJSDate(serial) {
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
            const unitPriceFormated = numberAmountToPesoFormat(item.Precio_Unitario)
            const totalCostFormated = numberAmountToPesoFormat(item.Importe_Coste_total)
            const totalSaleFormated = numberAmountToPesoFormat(item.Importe_venta_total)
                
            return dataJsonFormated.push({
                ...item,
                Coste_unitario : unitCostFormated,
                Precio_Unitario : unitPriceFormated, 
                Importe_Coste_total : totalCostFormated,
                Importe_venta_total : totalSaleFormated,
                Fecha_envio : dateSendFormated,
                Fecha_pedido : dateRequestFormated
            })

        })
        //console.log('DATE FORMATED Json', dataJsonFormated);
        return dataJsonFormated
    }
    const handleFile = async (e) => {
        const file = e.target.files[0] //guardamos el evento en una constante
        const data = await file.arrayBuffer() //creamos un array buffer para leerlo
        const workbook = read(data)
        
        const workSheet = workbook.Sheets[workbook.SheetNames[0]] //determinamos como key de cada atributo del objeto Json a la primera fila de la planilla
        const dataJson = utils.sheet_to_json(workSheet) //convertimos a json la planilla
        
        console.log('DATA', dataJson)
        setJsonData(dataJson)
        setTableColumns(formatColumns(dataJson))
        setTableData(FormatData(dataJson))
    }
 
    return (
        <HStack justifyContent={'space-between'} alignItems={'center'} px={'1'}>
            <Flex justifyContent={'flex-start'} flexDirection={'column'}>
                <h3>Import your xlsx file</h3>
                <input type={'file'} onChange={(e) => handleFile(e)}></input>
            </Flex>
            <Link to="stadistics"><Button size={'lg'} colorScheme={'facebook'}>Stadistics</Button></Link>
        </HStack>
    )
}

export default ReadFile
