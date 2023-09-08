import { Radio, Flex } from '@ssamssam/react-ui';

import style from '../style.module.scss';

function RadioView() {
  return (
    <Flex className={style['radio-view']}>
      <Radio>None</Radio>
      <Radio checked>Checked</Radio>
      <Radio disabled>Checked</Radio>
      <Radio checked disabled>
        Checked + Disabled
      </Radio>
    </Flex>
  );
}

export default RadioView;
