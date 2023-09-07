import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-popup-bg',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상',
  },
  {
    name: '--ss-c-popup-text',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상',
  },
  {
    name: '--ss-c-popup-box-shadow',
    type: 'Color',
    defaultValue: '0px 3px 6px rgba(0, 0, 0, 0.2)',
    description: '그림자 색상 - 오류',
  },
];
export { cssVar };
