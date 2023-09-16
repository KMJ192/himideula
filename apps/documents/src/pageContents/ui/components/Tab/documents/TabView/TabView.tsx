import { Tab, Flex } from '@upcast/react-ui';

import style from '../style.module.scss';

const options = [
  {
    key: 0,
    contents: 'first',
    disabled: false,
  },
  {
    key: 1,
    contents: 'second',
    disabled: false,
  },
  {
    key: 2,
    contents: 'third',
    disabled: false,
  },
];

function TabView() {
  return (
    <Flex className={style['tab-view']}>
      <Flex className={style.category}>
        <span>horizontal</span>
        <Tab selected={0} options={options} direction='horizontal' />
      </Flex>
      <Flex className={style.category}>
        <span>vertical</span>
        <Tab selected={0} options={options} direction='vertical' />
      </Flex>
    </Flex>
  );
}

export default TabView;
