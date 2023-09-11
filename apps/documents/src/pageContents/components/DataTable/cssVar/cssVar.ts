import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
];

export { cssVar };
