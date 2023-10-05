import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-select-box-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'box 배경 색상 - 기본',
  },
  {
    name: '--upcast-color-select-box-bg-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'box 배경 색상 - 활성화',
  },
  {
    name: '--upcast-color-select-box-bg-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'box 배경 색상 - 오류',
  },
  {
    name: '--upcast-color-select-box-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: 'box 배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-select-box-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'box 배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-select-box-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'box 글자 색상 - 기본',
  },
  {
    name: '--upcast-color-select-box-text-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'box 글자 색상 - 활성화',
  },
  {
    name: '--upcast-color-select-box-text-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'box 글자 색상 - 오류',
  },
  {
    name: '--upcast-color-select-box-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: 'box 글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-select-box-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'box 글자 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-select-box-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary600,
    description: 'box 경계선 색상 - 기본',
  },
  {
    name: '--upcast-color-select-box-border-focus',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: 'box 경계선 색상 - 활성화',
  },
  {
    name: '--upcast-color-select-box-border-error',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.danger,
    description: 'box 경계선 색상 - 오류',
  },
  {
    name: '--upcast-color-select-box-border-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'box 경계선 색상 - 비활성화',
  },
  {
    name: '--upcast-color-select-box-border-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: 'box 경계선 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-select-box-placeholder',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'box placeholder - 기본',
  },
  {
    name: '--upcast-color-select-box-placeholder-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: 'box placeholder - 비활성화',
  },
  {
    name: '--upcast-color-select-dropbox-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'dropbox 배경 색상',
  },
  {
    name: '--upcast-color-select-dropbox-box-shadow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: '0px 3px 6px rgba(0, 0, 0, 0.2)',
    description: 'dropbox 그림자 색상',
  },
  {
    name: '--upcast-color-select-option-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'option 배경 색상 - 기본',
  },
  {
    name: '--upcast-color-select-option-bg-selected',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary100,
    description: 'option 배경 색상 - 선택',
  },
  {
    name: '--upcast-color-select-option-bg-reserved',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary200,
    description: 'option 배경 색상 - 예비 선택',
  },
  {
    name: '--upcast-color-select-option-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: 'option 배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-select-option-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary200,
    description: 'option 배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-select-option-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'option 글자 색상 - 기본',
  },
  {
    name: '--upcast-color-select-option-text-selected',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'option 글자 색상 - 선택',
  },
  {
    name: '--upcast-color-select-option-text-reserved',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'option 글자 색상 - 예비 선택',
  },
  {
    name: '--upcast-color-select-option-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: 'option 글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-select-option-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'option 글자 색상 - 마우스 호버',
  },
];

export { cssVar };
