import type { Documents } from '@src/store/components/DocsContents/state';

import TableView from './TableView/TableView';

const documents: Array<Documents> = [
  {
    title: 'Table 컴포넌트',
    description: '',
    view: <TableView />,
    componentString: [
      `<TableContainer>`,
      `    <Table>`,
      `        <Table.Caption>caption</Table.Caption>`,
      `        <Table.Thead>`,
      `            <Table.Tr>`,
      `                <Table.Th>head1</Table.Th>`,
      `                <Table.Th>head2</Table.Th>`,
      `                <Table.Th>head3</Table.Th>`,
      `            </Table.Tr>`,
      `        </Table.Thead>`,
      `        <Table.Tbody>`,
      `            <Table.Tr>`,
      `                <Table.Td>data1</Table.Td>`,
      `                <Table.Td>data2</Table.Td>`,
      `                <Table.Td>data3</Table.Td>`,
      `            </Table.Tr>`,
      `            <Table.Tr>`,
      `                <Table.Td>data1</Table.Td>`,
      `                <Table.Td>data2</Table.Td>`,
      `                <Table.Td>data3</Table.Td>`,
      `            </Table.Tr>`,
      `            <Table.Tr>`,
      `                <Table.Td>data1</Table.Td>`,
      `                <Table.Td>data2</Table.Td>`,
      `                <Table.Td>data3</Table.Td>`,
      `            </Table.Tr>`,
      `            <Table.Tr>`,
      `                <Table.Td>data1</Table.Td>`,
      `                <Table.Td>data2</Table.Td>`,
      `                <Table.Td>data3</Table.Td>`,
      `            </Table.Tr>`,
      `        </Table.Tbody>`,
      `        <Table.Tfoot>`,
      `            <Table.Tr>`,
      `                <Table.Th>foot1</Table.Th>`,
      `                <Table.Th>foot2</Table.Th>`,
      `                <Table.Th>foot3</Table.Th>`,
      `            </Table.Tr>`,
      `        </Table.Tfoot>`,
      `        <Table.Pagination lastPage={55} />`,
      `    </Table>`,
      `</TableContainer>`,
    ],
  },
];

export { documents };
