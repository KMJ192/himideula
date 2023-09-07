import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-button-bg',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
  {
    name: '--ss-c-button-bg-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary100,
    description: '배경 색상 - Hover',
  },
  {
    name: '--ss-c-button-bg-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray100,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--ss-c-button-bg-active',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상 - 활성화',
  },
  {
    name: '--ss-c-button-bg-ripple',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상 - 클릭 애니메이션',
  },
  {
    name: '--ss-c-button-text',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-button-text-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - Hover',
  },
  {
    name: '--ss-c-button-text-disabled',
    type: 'Color',
    defaultValue: COLOR.SOLID.white,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-c-button-text-active',
    type: 'Color',
    defaultValue: COLOR.SOLID.black,
    description: '글자 색상 - 활성화',
  },
  {
    name: '--ss-c-button-box-shadow',
    type: 'Color',
    defaultValue: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    description: '그림자 색상',
  },
  {
    name: '--ss-c-button-outline',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary300,
    description: '경계선 색상',
  },
];
export { cssVar };
