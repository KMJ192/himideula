import { DataTableContainer, DataTable } from '@ssamssam/react-ui';

function Pagination() {
  return (
    <DataTableContainer>
      <DataTable>
        <DataTable.Pagination lastPageIndex={55} />
      </DataTable>
    </DataTableContainer>
  );
}

export default Pagination;
