import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-tab-bg',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary000,
    description: '배경 색상 - 기본',
  },
  {
    name: '--ss-c-tab-bg-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary200,
    description: '배경 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-tab-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '배경 색상 - 비활성화',
  },
  {
    name: '--ss-c-tab-select-line',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '선택된 요소 표시선',
  },
  {
    name: '--ss-c-tab-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-tab-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 마우스 호버',
  },
  {
    name: '--ss-c-tab-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue000,
    description: '글자 색상 - 비활성화',
  },
];

export { cssVar };
