import { Spacing, Flex, Text } from '@ssamssam/react-ui';

import { useHooksDocsState } from '@src/store/pageContents/hooksDocs/state';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Usage() {
  const { usage } = useHooksDocsState();

  return usage.map(({ title, description, code }, idx) => {
    return (
      <Flex className={cx('contents')} key={`${idx}-${title}`}>
        <Text typo='h2'>{title}</Text>
        <Text typo='t1'>{description}</Text>
        <CodeGuide header='javascript' code={code} />
        <Spacing spacing={32} />
      </Flex>
    );
  });
}

export default Usage;
