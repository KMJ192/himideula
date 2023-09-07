import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-checkbox-border',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary700,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--ss-c-checkbox-border-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue300,
    description: '경계선 색상 - Hover',
  },
  {
    name: '--ss-c-checkbox-border-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray200,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--ss-c-checkbox-border-checked',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue400,
    description: '경계선 색상 - 선택',
  },
  {
    name: '--ss-c-checkbox-border-checked-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 선택, Hover',
  },
  {
    name: '--ss-c-checkbox-border-checked-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray300,
    description: '경계선 색상 - 선택, 비활성화',
  },
  {
    name: '--ss-c-checkbox-bg',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue400,
    description: '박스 배경 색상 (checked가 true인 경우만 출력)',
  },
  {
    name: '--ss-c-checkbox-bg-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.blue500,
    description: '박스 배경 색상 - Hover',
  },
  {
    name: '--ss-c-checkbox-bg-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray100,
    description: '박스 배경 색상 - 비활성화 (checked가 false라도 출력)',
  },
  {
    name: '--ss-c-checkbox-bg-checked-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray300,
    description: '박스 배경 색상 - 선택, 비활성화',
  },
  {
    name: '--ss-c-checkbox-text',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-checkbox-text-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - Hover',
  },
  {
    name: '--ss-c-checkbox-text-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-c-checkbox-mark',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary000,
    description: '마킹 색상 - 기본',
  },
  {
    name: '--ss-c-checkbox-mark-hover',
    type: 'Color',
    defaultValue: COLOR.LIGHT.primary000,
    description: '마킹 색상 - Hover',
  },
  {
    name: '--ss-c-checkbox-mark-disabled',
    type: 'Color',
    defaultValue: COLOR.LIGHT.gray000,
    description: '마킹 색상 - 비활성화',
  },
];
export { cssVar };
