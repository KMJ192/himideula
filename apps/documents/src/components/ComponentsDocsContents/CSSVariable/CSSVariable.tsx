import { Table, Text, Flex } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

function CSSVariable() {
  const { title, cssVar } = useDocsContentsState();
  const { theme } = useTheme();

  return (
    <Table>
      <Table.Caption>
        <Text typo='t2'>{title} 컴포넌트 CSS 변수</Text>
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
        {cssVar.map(({ name, type, defaultValue, description }, index) => {
          return (
            <Table.Tr key={`${index}-${name}`}>
              <Table.Td>
                <Text typo='s1'>{name}</Text>
              </Table.Td>
              <Table.Td>
                <Text typo='s2'>{type}</Text>
              </Table.Td>
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
                      boxShadow:
                        theme === 'light'
                          ? '0px 3px 6px rgba(0, 0, 0, .2)'
                          : '0px 3px 6px rgba(0, 0, 0, 0.7)',
                    }}
                  ></div>
                  <Text typo='c1'>{defaultValue}</Text>
                </Flex>
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

export default CSSVariable;
