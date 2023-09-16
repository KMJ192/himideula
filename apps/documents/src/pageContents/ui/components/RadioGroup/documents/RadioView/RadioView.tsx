import { RadioGroup, Flex } from '@upcast/react-ui';

import style from '../style.module.scss';

const options = [
  {
    key: 0,
    children: 'first',
    disabled: false,
  },
  {
    key: 1,
    children: 'second',
    disabled: false,
  },
  {
    key: 2,
    children: 'third',
    disabled: false,
  },
];

function RadioView() {
  return (
    <Flex className={style['radio-view']}>
      <Flex className={style.category}>
        <span>horizontal</span>
        <RadioGroup selected={0} options={options} direction='horizontal' />
      </Flex>
      <Flex className={style.category}>
        <span>vertical</span>
        <RadioGroup selected={0} options={options} direction='vertical' />
      </Flex>
    </Flex>
  );
}

export default RadioView;
