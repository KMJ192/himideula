import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-row-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상',
  },
  {
    name: '--ss-c-row-box-shadow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: '0px 3px 6px rgba(64, 64, 64, 0.2)',
    description: '그림자 색상',
  },
];
export { cssVar };
