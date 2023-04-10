//format head of tables to be render accordint to Chart.js documentation
export function formatColumnsToTable (data) {
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