import { Flex, Text, Button, RadioGroup, Spacing } from '@ssamssam/react-ui';
import { useDocsContentsState } from '@src/store/components/DocsContents/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const { title, playground } = useDocsContentsState();

  return (
    <Flex className={cx('playground')}>
      <Text typo='t1'>{title} 컴포넌트 UI</Text>
      <Flex className={cx('content')}>
        <div>loading</div>
        <RadioGroup
          selected={0}
          options={[
            {
              children: 'true',
            },
            {
              children: 'false',
            },
          ]}
        />
        <Button variant='outlined'>Button</Button>
      </Flex>
      <Flex className={cx('content')}>
        <div>variant</div>
        <RadioGroup
          selected={0}
          options={[
            {
              children: 'primary',
            },
            {
              children: 'outlined',
            },
            {
              children: 'clear',
            },
          ]}
        />
      </Flex>
      {/* {playground.map(
        ({ subject, options, componentString, description }, idx) => {
          return (
            <div key={idx}>
              <RadioGroup options={options} />
            </div>
          );
        },
      )} */}
    </Flex>
  );
}

export default Playground;
