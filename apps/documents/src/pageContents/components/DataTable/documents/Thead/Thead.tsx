import { DataTableContainer, DataTable } from '@ssamssam/react-ui';

function Thead() {
  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Thead>
          <DataTable.Tr>
            <DataTable.Th>head1</DataTable.Th>
            <DataTable.Th>head2</DataTable.Th>
            <DataTable.Th>head3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Thead>
      </DataTable>
    </DataTableContainer>
  );
}

export default Thead;
