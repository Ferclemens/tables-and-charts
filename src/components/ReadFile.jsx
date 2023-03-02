import { Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { read, utils } from 'xlsx';
import ShowTable from "./ShowTable";


const ReadFile = () => {
    const [columnsTable, setColumnsTable] = useState(null)
    const [dataTable, setDataTable] = useState(null)

    const formatColumns = (dataJson) => {
        const columnsArray = Object.keys(dataJson[0])
        const columns = []
        columnsArray.map((title) => {
            return columns.push({
                Header: title,
                accessor: title,   
            })
        })
        return columns
    }
    const handleFile = async (e) => {
        const file = e.target.files[0] //guardamos el evento en una constante
        const data = await file.arrayBuffer() //creamos un array buffer para leerlo
        const workbook = read(data)
        
        const workSheet = workbook.Sheets[workbook.SheetNames[0]] //determinamos como key de cada atributo del objeto Json a la primera fila de la planilla
        
        const dataJson = utils.sheet_to_json(workSheet) //convertimos a json la planilla
        
        setColumnsTable(formatColumns(dataJson))
        setDataTable(dataJson)
    }
    
    //console.log('DATA', dataFile);
    //columnsTable ? console.log('useState columnsTable', columnsTable[1].accessor) : null;
    //console.log('useState columnsTable', columnsTable)
    //console.log('useState dataTable', dataTable);

    return (
    <VStack>
        <h3>Import your xlsx file</h3>
        <input type={'file'} onChange={(e) => handleFile(e)}></input>
        {columnsTable ? <ShowTable columnsTable={columnsTable} dataTable={dataTable} /> : null}
    </VStack>
    )
}

export default ReadFile