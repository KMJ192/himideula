import { DataTableContainer, DataTable } from '@ssamssam/react-ui';

function Pagination() {
  return (
    <DataTableContainer>
      <DataTable.Pagination lastPageIndex={55} />
    </DataTableContainer>
  );
}

export default Pagination;
