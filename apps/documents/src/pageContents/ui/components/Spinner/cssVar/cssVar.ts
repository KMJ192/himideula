import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-spinner-color1',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '색상1',
  },
  {
    name: '--upcast-color-spinner-color2',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray400,
    description: '색상2',
  },
  {
    name: 'upcast-size-spinner',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '24px',
    description: '크기',
  },
  {
    name: 'upcast-size-border-width',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '4px',
    description: '굵기',
  },
];

export { cssVar };
