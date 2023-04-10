import React, { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    // Json and Table data
    const [jsonData, setJsonData] = useState(null)
    const [tableColumns, setTableColumns] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [chartData, setChartData] = useState(null)
    const [cartesianChartData, setCartesianChartData ] = useState(null)

    const values = {
        jsonData, 
        setJsonData, 
        tableColumns, 
        setTableColumns, 
        tableData, 
        setTableData, 
        chartData, 
        setChartData,
        cartesianChartData,
        setCartesianChartData
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    const context = useContext(DataContext)
    return context
}
