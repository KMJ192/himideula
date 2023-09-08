import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';
import { COLOR } from '@src/styles/color/color';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-c-progress-body',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.primary300,
    description: '배경 색상',
  },
  {
    name: '--ss-c-progress-bar',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.blue600,
    description: '진행 바 색상 - 진행중',
  },
  {
    name: '--ss-c-progress-exit',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: COLOR.LIGHT.gray300,
    description: '진행 바 색상 - 진행종료',
  },
  {
    name: '--ss-c-progress-pending',
    type: CSS_VAR_TYPE.COLOR,
    defaultValue: 'rgba(255, 255, 255, 0.7)',
    description: '진행 애니메이션 색상',
  },
  {
    name: '--ss-size-progress-height',
    type: CSS_VAR_TYPE.SIZE,
    defaultValue: '10px',
    description: '높이',
  },
];

export { cssVar };
