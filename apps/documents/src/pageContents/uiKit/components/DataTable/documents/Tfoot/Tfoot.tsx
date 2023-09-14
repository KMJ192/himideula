import { DataTableContainer, DataTable } from '@ssamssam/react-ui';

function Tfoot() {
  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Tfoot>
          <DataTable.Tr>
            <DataTable.Th>foot1</DataTable.Th>
            <DataTable.Th>foot2</DataTable.Th>
            <DataTable.Th>foot3</DataTable.Th>
          </DataTable.Tr>
        </DataTable.Tfoot>
      </DataTable>
    </DataTableContainer>
  );
}

export default Tfoot;
