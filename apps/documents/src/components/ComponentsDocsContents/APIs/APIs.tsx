import { Badge, Table, Text, Flex } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function APIs() {
  const { theme } = useTheme();
  const { title, apis, defaultTag } = useDocsContentsState();

  return (
    <Table className={cx('apis-table')}>
      <Table.Caption className={cx('caption')}>
        <Flex className={cx('flex')}>
          <Text typo='t2'>{title} 컴포넌트 Props</Text>
          <Text typo='c1'>
            기본 태그는{' '}
            <strong className={cx('emphasis')}>[{defaultTag}]</strong>
            이며, 해당 태그의 속성을 사용할 수 있습니다.
          </Text>
        </Flex>
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
                <Badge colorSchema={theme === 'dark' ? 'custom' : 'info'}>
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
