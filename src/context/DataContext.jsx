import React, { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [tableColumns, setTableColumns] = useState(null)
    const [jsonData, setJsonData] = useState(null)
    const [tableData, setTableData] = useState(null)

    const values = {jsonData, setJsonData, tableColumns, setTableColumns, tableData, setTableData}
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
