import { Table, Text, Flex } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';

function CSSVariable() {
  const { title, cssVar } = useDocsContentsState();

  return (
    <Table>
      <Table.Caption>
        <Text typo='t2'>{title} 컴포넌트 CSS 변수</Text>
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Default value</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {cssVar.map(({ name, type, defaultValue, description }, index) => {
          return (
            <Table.Tr key={`${index}-${name}`}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{type}</Table.Td>
              <Table.Td>
                <Flex
                  style={{
                    columnGap: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      background: defaultValue,
                      borderRadius: '4px',
                      boxShadow: '0px 3px 6px rgba(0, 0, 0, .2)',
                    }}
                  ></div>
                  <div>{defaultValue}</div>
                </Flex>
              </Table.Td>
              <Table.Td>{description}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
}

export default CSSVariable;
