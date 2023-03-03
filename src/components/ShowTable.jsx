import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useTable } from "react-table";


function ShowTable(props) {
    const {columnsTable, dataTable} = props
    console.log('columnsTable from ShowTable', columnsTable);
    console.log('dataTable from ShowTable', dataTable);
    const columns = React.useMemo(
      () => columnsTable, []);
    const data = React.useMemo(
      () => dataTable, []);

    const tableInstance = useTable({ columns, data })

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance
   
    
   
    return (
      // apply the table props
      <Table variant='striped' colorScheme='teal' {...getTableProps()}>
        <Thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <Th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        {/* Apply the table body props */}
        <Tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <Tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <Td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    )
}
export default ShowTable;
