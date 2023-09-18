import { Fragment } from 'react';
import {
  Badge,
  DataTable,
  DataTableContainer,
  Text,
  Flex,
} from '@upcast/react-ui';
import { useModulesDocsState } from '@src/store/pageContents/modulesDocs/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function APIs() {
  const { theme } = useTheme();
  const { apis } = useModulesDocsState();

  return (
    <Flex className={cx('apis')}>
      {apis.map(({ title, description, props }, idx) => {
        return (
          <Fragment key={`${idx}-${title}`}>
            <DataTableContainer>
              <DataTable>
                <DataTable.Caption>
                  <Text typo='t1'>{description}</Text>
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
                    (
                      { name, type, description, defaultValue, essential },
                      index,
                    ) => {
                      return (
                        <DataTable.Tr key={`${index}-${name}`}>
                          <DataTable.Td className={cx('name')}>
                            <Text typo='s1'>{name}</Text>
                            {essential && (
                              <div className={cx('essential', theme)}>*</div>
                            )}
                          </DataTable.Td>
                          <DataTable.Td className={cx('type', theme)}>
                            <Badge colorSchema='custom'>
                              <Text typo='s2'>{type}</Text>
                            </Badge>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text typo='c1'>
                              {essential ? '-' : defaultValue}
                            </Text>
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
