import { Badge, Table, Text } from '@ssamssam/react-ui';

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
    <Table className={cx('css-var-table')}>
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
                <Badge
                  colorSchema={
                    type === CSS_VAR_TYPE.COLOR ? 'primary' : 'custom'
                  }
                >
                  <Text typo='s2'>{type}</Text>
                </Badge>
              </Table.Td>
              <Table.Td className={cx('color-view')}>
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
