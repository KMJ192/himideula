import { Spacing, Flex, Text } from '@ssamssam/react-ui';

import { useHooksDocsState } from '@src/store/pageContents/modulesDocs/state';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function DataType() {
  const { title, dataType } = useHooksDocsState();

  return (
    <Flex className={cx('data-type')}>
      <Text typo='t2'>[{title}]에서 사용되는 타입</Text>
      <Spacing spacing={32} />
      {dataType.map(({ name, description, code }, idx) => {
        return (
          <Flex key={`${name}-${idx}`} className={cx('info')}>
            <Spacing spacing={8} />
            <Text typo='h3'>{name}</Text>
            <Spacing spacing={16} />
            <Text typo='b1'>{description}</Text>
            <Spacing spacing={16} />
            <CodeGuide header='typescript' code={code} />
            <Spacing spacing={32} />
          </Flex>
        );
      })}
    </Flex>
  );
}

export default DataType;
