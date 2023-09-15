import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-switch-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상 - 기본',
  },
  {
    name: '--ss-c-switch-bg-checked',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '배경 색상 - 선택',
  },
  {
    name: '--ss-c-switch-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--ss-c-switch-bg-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '배경 색상 - 선택, 비활성화',
  },
  {
    name: '--ss-c-switch-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue200,
    description: '배경 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-switch-bg-checked-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '배경 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-switch-bullet',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '불랫 색상 - 기본',
  },
  {
    name: '--ss-c-switch-bullet-checked',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '불랫 색상 - 선택',
  },
  {
    name: '--ss-c-switch-bullet-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '불랫 색상 - 비활성화',
  },
  {
    name: '--ss-c-switch-bullet-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray400,
    description: '불랫 색상 - 선택, 비활성화',
  },
  {
    name: '--ss-c-switch-bullet-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '불랫 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-switch-bullet-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '불랫 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-switch-bullet-checked-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '불랫 색상 - 선택, 마우스 호버',
  },
  {
    name: '--ss-c-switch-bullet-box-shadow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: '0px 3px 6px rgba(63, 63, 63, 0.3)',
    description: '불랫 그림자 색상',
  },
  {
    name: '--ss-c-switch-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-switch-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-switch-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-size-switch-width',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '44px',
    description: '너비',
  },
  {
    name: '--ss-size-switch-height',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '24px',
    description: '높이',
  },
  {
    name: '--ss-size-switch-bullet',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '16px',
    description: '불랫 크기',
  },
];

export { cssVar };
