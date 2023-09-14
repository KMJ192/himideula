import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-spinner-color1',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '색상1',
  },
  {
    name: '--ss-c-spinner-color2',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray400,
    description: '색상2',
  },
  {
    name: 'ss-size-spinner',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '24px',
    description: '크기',
  },
  {
    name: 'ss-size-border-width',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '4px',
    description: '굵기',
  },
];

export { cssVar };
