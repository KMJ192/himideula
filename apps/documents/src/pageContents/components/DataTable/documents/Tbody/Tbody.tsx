import { DataTableContainer, DataTable } from '@ssamssam/react-ui';

function Tbody() {
  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Tbody>
          <DataTable.Tr>
            <DataTable.Th>data1</DataTable.Th>
            <DataTable.Th>data2</DataTable.Th>
            <DataTable.Th>data3</DataTable.Th>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Th>data1</DataTable.Th>
            <DataTable.Th>data2</DataTable.Th>
            <DataTable.Th>data3</DataTable.Th>
          </DataTable.Tr>
          <DataTable.Tr>
            <DataTable.Th>data1</DataTable.Th>
            <DataTable.Th>data2</DataTable.Th>
            <DataTable.Th>data3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Tbody>
      </DataTable>
    </DataTableContainer>
  );
}

export default Tbody;
