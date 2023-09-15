import { Flex, Text } from '@ssamssam/react-ui';
import { useDocsContentsState } from '@src/store/pageContents/uiDocs/state';

import Line from '@src/components/Line/Line';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const { title, playground } = useDocsContentsState();

  return (
    <Flex className={cx('playground')}>
      <Text as='p' typo='s1'>
        {title} 컴포넌트를 테스트하는 Playground 입니다.
      </Text>
      <Line></Line>
      {playground?.component}
    </Flex>
  );
}

export default Playground;
