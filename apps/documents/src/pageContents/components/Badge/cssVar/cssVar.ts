import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-badge-color',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary100,
    description: '문자색상',
  },
  {
    name: '--ss-c-badge-bg',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary700,
    description: '배경색상',
  },
];
export { cssVar };
