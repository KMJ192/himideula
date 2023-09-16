import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-checkbox-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary700,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--upcast-color-checkbox-border-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '경계선 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-checkbox-border-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--upcast-color-checkbox-border-checked',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue400,
    description: '경계선 색상 - 선택',
  },
  {
    name: '--upcast-color-checkbox-border-checked-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 선택, 마우스 호버',
  },
  {
    name: '--upcast-color-checkbox-border-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray300,
    description: '경계선 색상 - 선택, 비활성화',
  },
  {
    name: '--upcast-color-checkbox-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue400,
    description: '박스 배경 색상 (checked가 true인 경우만 출력)',
  },
  {
    name: '--upcast-color-checkbox-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '박스 배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-checkbox-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '박스 배경 색상 - 비활성화 (checked가 false라도 출력)',
  },
  {
    name: '--upcast-color-checkbox-bg-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray300,
    description: '박스 배경 색상 - 선택, 비활성화',
  },
  {
    name: '--upcast-color-checkbox-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--upcast-color-checkbox-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-checkbox-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-checkbox-mark',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '마킹 색상 - 기본',
  },
  {
    name: '--upcast-color-checkbox-mark-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '마킹 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-checkbox-mark-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '마킹 색상 - 비활성화',
  },
  {
    name: '--upcast-size-checkbox',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '16px',
    description: '크기',
  },
];
export { cssVar };
