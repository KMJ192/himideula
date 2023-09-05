import { Badge, Table, Text } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';

function APIs() {
  const { title, apis } = useDocsContentsState();

  return (
    <Table>
      <Table.Caption>
        <Text typo='t2'>{title} 컴포넌트 Props</Text>
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Text typo='t2'>Name</Text>
          </Table.Th>
          <Table.Th>
            <Text typo='t2'>Type</Text>
          </Table.Th>
          <Table.Th>
            <Text typo='t2'>Default value</Text>
          </Table.Th>
          <Table.Th>
            <Text typo='t2'>Description</Text>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {apis.map(({ name, type, description, defaultValue }, index) => {
          return (
            <Table.Tr key={`${index}-${name}`}>
              <Table.Td>
                <Text typo='s1'>{name}</Text>
              </Table.Td>
              <Table.Td>
                <Text typo='s2'>{type}</Text>
              </Table.Td>
              <Table.Td>
                <Badge colorSchema='info'>
                  <Text typo='c1'>{defaultValue}</Text>
                </Badge>
              </Table.Td>
              <Table.Td>
                <Text typo='s2'>{description}</Text>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
}

export default APIs;
