import { Badge, DataTable, DataTableContainer, Text } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

import { CSS_VAR_TYPE } from './types';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function CSSVariable() {
  const { title, cssVar } = useDocsContentsState();
  const { theme } = useTheme();

  return (
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
                <DataTable.Td>
                  <Badge
                    colorSchema={
                      type === CSS_VAR_TYPE.COLOR ? 'primary' : 'custom'
                    }
                  >
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
  );
}

export default CSSVariable;
