import {
  Badge,
  DataTable,
  DataTableContainer,
  Text,
  Flex,
} from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
import { Fragment } from 'react';
const cx = classNames.bind(style);

function APIs() {
  const { theme } = useTheme();
  const { apis } = useDocsContentsState();

  return (
    <Flex className={cx('apis-table')}>
      {apis.map(({ title, defaultTag, props }, idx) => {
        return (
          <Fragment key={`${idx}-${title}`}>
            <Flex className={cx('head')}>
              <Text typo='h3'>{title}</Text>
              <Text typo='b2'>
                기본 태그는{' '}
                <strong className={cx('emphasis')}>[{defaultTag}]</strong>
                이며, 해당 태그의 속성을 사용할 수 있습니다.
              </Text>
            </Flex>
            <DataTableContainer>
              <DataTable>
                <DataTable.Caption>
                  <Text typo='t2'>{title} 컴포넌트 Props</Text>
                </DataTable.Caption>
                <DataTable.Thead>
                  <DataTable.Tr>
                    <DataTable.Th>
                      <Text typo='t2'>Name</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Type</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Default value</Text>
                    </DataTable.Th>
                    <DataTable.Th>
                      <Text typo='t2'>Description</Text>
                    </DataTable.Th>
                  </DataTable.Tr>
                </DataTable.Thead>
                <DataTable.Tbody>
                  {props.map(
                    ({ name, type, description, defaultValue }, index) => {
                      return (
                        <DataTable.Tr key={`${index}-${name}`}>
                          <DataTable.Td>
                            <Text typo='s1'>{name}</Text>
                          </DataTable.Td>
                          <DataTable.Td>
                            {type && (
                              <Badge
                                colorSchema={
                                  theme === 'dark' ? 'custom' : 'info'
                                }
                              >
                                <Text typo='s2'>{type}</Text>
                              </Badge>
                            )}
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text typo='c1'>{defaultValue}</Text>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text typo='s2'>{description}</Text>
                          </DataTable.Td>
                        </DataTable.Tr>
                      );
                    },
                  )}
                </DataTable.Tbody>
              </DataTable>
            </DataTableContainer>
          </Fragment>
        );
      })}
    </Flex>
  );
}

export default APIs;
