import { DataTableContainer, DataTable } from '@upcast/react-ui';

function Pagination() {
  return (
    <DataTableContainer>
      <DataTable.Pagination lastPageIndex={55} />
    </DataTableContainer>
  );
}

export default Pagination;
