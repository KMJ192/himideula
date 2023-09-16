import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-color-data-table-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '박스 배경 색상',
  },
  {
    name: '--upcast-color-data-table-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary600,
    description: '박스 경계선 색상',
  },
  {
    name: '--upcast-color-data-table-caption-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '캡션 문자 색상',
  },
  {
    name: '--upcast-color-data-header-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary200,
    description: 'Header 배경 색상',
  },
  {
    name: '--upcast-color-data-header-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'Header 글자 색상',
  },
  {
    name: '--upcast-color-data-footer-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: 'Footer 배경 색상',
  },
  {
    name: '--upcast-color-data-footer-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'Footer 글자 색상',
  },
  {
    name: '--upcast-color-data-divide-line',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary500,
    description: 'Row 경계선 색상',
  },
  {
    name: '--upcast-color-data-body-row-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: 'Row 배경 색상 - 기본',
  },
  {
    name: '--upcast-color-data-body-row-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: 'Row 배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-data-body-row-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: 'Row 배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-data-body-row-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'Row 글자 색상 - 기본',
  },
  {
    name: '--upcast-color-data-body-row-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: 'Row 글자 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-data-body-row-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: 'Row 글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-data-table-pagination-index-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '페이지네이션 목록 배경 색상 - 기본',
  },
  {
    name: '--upcast-color-data-table-pagination-index-bg-selected',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '페이지네이션 목록 배경 색상 - 선택',
  },
  {
    name: '--upcast-color-data-table-pagination-index-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.background,
    description: '페이지네이션 목록 배경 색상 - 비활성화',
  },
  {
    name: '--upcast-color-data-table-pagination-index-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue100,
    description: '페이지네이션 목록 배경 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-data-table-pagination-index-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '페이지네이션 목록 글자 색상 - 기본',
  },
  {
    name: '--upcast-color-data-table-pagination-index-text-selected',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '페이지네이션 목록 글자 색상 - 선택',
  },
  {
    name: '--upcast-color-data-table-pagination-index-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '페이지네이션 목록 글자 색상 - 비활성화',
  },
  {
    name: '--upcast-color-data-table-pagination-index-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '페이지네이션 목록 글자 색상 - 마우스 호버',
  },
  {
    name: '--upcast-color-data-table-pagination-arrow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '페이지네이션 화살표 색상 - 기본',
  },
  {
    name: '--upcast-color-data-table-pagination-arrow-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '페이지네이션 화살표 - 비활성화',
  },
];

export { cssVar };
