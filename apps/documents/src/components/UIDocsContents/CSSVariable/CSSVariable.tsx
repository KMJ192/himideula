import {
  Flex,
  Badge,
  DataTable,
  DataTableContainer,
  Text,
} from '@ssamssam/react-ui';

import { useUIDocsState } from '@src/store/pageContents/uiDocs/state';
import { useTheme } from '@src/store/theme/themeState';

import { CSS_VAR_TYPE } from './types';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function CSSVariable() {
  const { title, cssVar } = useUIDocsState();
  const { theme } = useTheme();

  return (
    <Flex className={cx('css-var')}>
      <Text typo='b1'>
        색상 또는 크기 등을 지정할 수 있는 CSS변수를 제공합니다.
      </Text>
      <DataTableContainer>
        <DataTable className={cx('css-var-table')}>
          <DataTable.Caption>
            <Text typo='t2'>{title} 컴포넌트 CSS 변수</Text>
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
            {cssVar.map(({ name, type, defaultValue, description }, index) => {
              return (
                <DataTable.Tr key={`${index}-${name}`}>
                  <DataTable.Td>
                    <Text typo='s1'>{name}</Text>
                  </DataTable.Td>
                  <DataTable.Td className={cx('css-type')}>
                    <Badge className={cx(type)} colorSchema='custom'>
                      {type && <Text typo='s2'>{type}</Text>}
                    </Badge>
                  </DataTable.Td>
                  <DataTable.Td className={cx('color-view')}>
                    {type === CSS_VAR_TYPE.COLOR && (
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '4px',
                          background: defaultValue,
                          boxShadow:
                            theme === 'light'
                              ? '0px 3px 6px rgba(0, 0, 0, .2)'
                              : '0px 3px 6px rgba(0, 0, 0, 0.7)',
                        }}
                      ></div>
                    )}
                    <Text typo='s2'>{defaultValue}</Text>
                  </DataTable.Td>
                  <DataTable.Td>
                    <Text typo='s2'>{description}</Text>
                  </DataTable.Td>
                </DataTable.Tr>
              );
            })}
          </DataTable.Tbody>
        </DataTable>
      </DataTableContainer>
    </Flex>
  );
}

export default CSSVariable;
