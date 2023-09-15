import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-button-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
  {
    name: '--ss-c-button-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary100,
    description: '배경 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-button-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--ss-c-button-bg-active',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상 - 활성화',
  },
  {
    name: '--ss-c-button-bg-ripple',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상 - 클릭 애니메이션',
  },
  {
    name: '--ss-c-button-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-button-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-button-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.SOLID.white,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-c-button-text-active',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.SOLID.black,
    description: '글자 색상 - 활성화',
  },
  {
    name: '--ss-c-button-box-shadow',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    description: '그림자 색상',
  },
  {
    name: '--ss-c-button-outline',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '경계선 색상',
  },
];
export { cssVar };
