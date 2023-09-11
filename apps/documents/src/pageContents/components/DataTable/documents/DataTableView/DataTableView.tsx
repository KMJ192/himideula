'use client';

import {
  DataTable,
  DataTableContainer,
  useDataTablePagination,
} from '@ssamssam/react-ui';

function DataTableView() {
  const pagination = useDataTablePagination({ lastPage: 55 });

  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Caption>caption</DataTable.Caption>
        <DataTable.Thead>
          <DataTable.Tr>
            <DataTable.Th>head1</DataTable.Th>
            <DataTable.Th>head2</DataTable.Th>
            <DataTable.Th>head3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Thead>
        <DataTable.Tbody>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Td>data1</DataTable.Td>
            <DataTable.Td>data2</DataTable.Td>
            <DataTable.Td>data3</DataTable.Td>
          </DataTable.Tr>
        </DataTable.Tbody>
        <DataTable.Tfoot>
          <DataTable.Tr>
            <DataTable.Th>foot1</DataTable.Th>
            <DataTable.Th>foot2</DataTable.Th>
            <DataTable.Th>foot3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Tfoot>
      </DataTable>
      <DataTable.DataTablePagination {...pagination} />
    </DataTableContainer>
  );
}

export default DataTableView;
