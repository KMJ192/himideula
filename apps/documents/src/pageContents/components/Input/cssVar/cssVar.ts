import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-input-border',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary600,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--ss-c-input-border-focus',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 포커싱',
  },
  {
    name: '--ss-c-input-border-error',
    type: 'Color',
    defaultValue: COLOR.LIGHT.danger,
    description: '경계선 색상 - 오류',
  },
  {
    name: '--ss-c-input-border-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray100,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--ss-c-input-bg',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
  {
    name: '--ss-c-input-bg-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--ss-c-input-text',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-input-text-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-c-input-placeholder',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 기본',
  },
  {
    name: '--ss-c-input-placeholder-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 비활성화',
  },
  {
    name: '--ss-c-input-box-shadow',
    type: 'Color',
    defaultValue: '0px 3px 6px rgba(62, 62, 62, 0.1)',
    description: '그림자 색상',
  },
];
export { cssVar };
