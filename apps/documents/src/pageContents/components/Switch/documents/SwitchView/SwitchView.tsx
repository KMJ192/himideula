import { Switch, Flex } from '@ssamssam/react-ui';

import style from '../style.module.scss';

function SwitchView() {
  return (
    <Flex className={style.switch}>
      <Switch checked={false}>Unchecked</Switch>
      <Switch checked={false} disabled>
        Unchecked + Disabled
      </Switch>
      <Switch checked>Checked</Switch>
      <Switch checked disabled>
        Checked + Disabled
      </Switch>
    </Flex>
  );
}

export default SwitchView;
