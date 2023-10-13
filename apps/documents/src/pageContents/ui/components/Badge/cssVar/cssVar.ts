import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-badge-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary100,
    description: '문자 색상',
  },
  {
    name: '--upcast-color-badge-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary700,
    description: '배경 색상',
  },
];
export { cssVar };
