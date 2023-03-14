import { Button, HStack, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { useDataContext } from "../context/DataContext.jsx";


function ShowTable() {
  const {tableColumns, tableData} = useDataContext()

  //console.log('tableColumns from Context in ShowTable', tableColumns);
  //console.log('tableData from Context in ShowTable', tableData);
  
  const columns = React.useMemo(
    () => tableColumns, [tableColumns]);
  const data = React.useMemo(
    () => tableData, [tableData]);

  const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 }}, useGlobalFilter, useSortBy, usePagination )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    pageCount,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    state
  } = tableInstance
   
    
   
  return (
    <Stack py={'1'}>
      <Table variant='striped' colorScheme='teal' size='sm' {...getTableProps()}>
        <Thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
          page.map(row => {
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
      <HStack>
        <Button size={'sm'} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button size={'sm'} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button size={'sm'} onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button size={'sm'} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
          <Text w={'30'}>Page {pageIndex + 1} of {pageOptions.length}</Text>
          <span>{' | '}</span>
          <Text>Go to page:</Text>
          <Input size={'sm'}
            type="number"
            defaultValue={pageIndex}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        
        <Select size={'sm'} w={'30'}
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
        <Text w={'44'}>Total registers: {preGlobalFilteredRows.length}</Text>
        <HStack>
          <Text>Search:</Text>
          <Input size={'sm'} type={'text'} w={'21'} onChange={(event) => setGlobalFilter(event.target.value)} value={state.globalFilter}></Input>
        </HStack>
      </HStack>
    </Stack>
  )
}
export default ShowTable;
