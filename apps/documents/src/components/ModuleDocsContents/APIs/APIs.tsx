import { Fragment } from 'react';
import {
  Badge,
  DataTable,
  DataTableContainer,
  Text,
  Flex,
} from '@upcast/react-ui';
import { useHooksDocsState } from '@src/store/pageContents/modulesDocs/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function APIs() {
  const { theme } = useTheme();
  const { apis } = useHooksDocsState();

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
                    ({ name, type, description, defaultValue }, index) => {
                      return (
                        <DataTable.Tr key={`${index}-${name}`}>
                          <DataTable.Td>
                            <Text>{name}</Text>
                          </DataTable.Td>
                          <DataTable.Td className={cx('type', theme)}>
                            <Badge colorSchema='custom'>
                              <Text typo='s2'>{type}</Text>
                            </Badge>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text>{defaultValue}</Text>
                          </DataTable.Td>
                          <DataTable.Td>
                            <Text>{description}</Text>
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
