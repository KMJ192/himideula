import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-input-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary600,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--upcast-color-input-border-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 포커싱',
  },
  {
    name: '--upcast-color-input-border-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.danger,
    description: '경계선 색상 - 오류',
  },
  {
    name: '--upcast-color-input-border-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--upcast-color-input-border-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '경계선 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-input-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '배경 색상 - 기본',
  },
  {
    name: '--upcast-color-input-bg-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '배경 색상 - 활성화',
  },
  {
    name: '--upcast-color-input-bg-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '배경 색상 - 오류',
  },
  {
    name: '--upcast-color-input-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-input-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-input-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--upcast-color-input-text-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 활성화',
  },
  {
    name: '--upcast-color-input-text-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 오류',
  },
  {
    name: '--upcast-color-input-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-input-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-input-placeholder',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 기본',
  },
  {
    name: '--upcast-color-input-placeholder-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'Placeholder 색상 - 비활성화',
  },
];
export { cssVar };
