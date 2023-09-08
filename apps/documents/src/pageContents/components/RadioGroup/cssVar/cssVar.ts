import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-radio-border',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '경계선 색상 - 기본',
  },
  {
    name: '--ss-c-radio-border-checked',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '경계선 색상 - 선택',
  },
  {
    name: '--ss-c-radio-border-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '경계선 색상 - 비활성화',
  },
  {
    name: '--ss-c-radio-border-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '경계선 색상 - 선택, 비활성화',
  },
  {
    name: '--ss-c-radio-border-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue400,
    description: '경계선 색상 - Hover',
  },
  {
    name: '--ss-c-radio-border-checked-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '경계선 색상 - 선택, Hover',
  },
  {
    name: '--ss-c-radio-bg-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경색 - 비활성화',
  },
  {
    name: '--ss-c-radio-bg-checked-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray000,
    description: '배경색 - 선택, 비활성화',
  },
  {
    name: '--ss-c-radio-text',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - 기본',
  },
  {
    name: '--ss-c-radio-text-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray200,
    description: '글자 색상 - 비활성화',
  },
  {
    name: '--ss-c-radio-text-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.text,
    description: '글자 색상 - Hover',
  },
  {
    name: '--ss-c-radio-pupil',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue300,
    description: '마크 색상 - 기본',
  },
  {
    name: '--ss-c-radio-pupil-disabled',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray100,
    description: '마크 색상 - 비활성화',
  },
  {
    name: '--ss-c-radio-pupil-hover',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue500,
    description: '마크 색상 - Hover',
  },
  {
    name: '--ss-size-radio',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '16px',
    description: '크기',
  },
  {
    name: '--ss-size-radio-pupil',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '10px',
    description: '마크 크기',
  },
];

export { cssVar };
