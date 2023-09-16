import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-layout-float-left',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '화면 왼쪽 기준 위치 지정 - startDirection이 "l"인 경우 적용',
  },
  {
    name: '--upcast-layout-float-right',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description:
      '화면 오른쪽 기준 위치 지정 - startDirection이 "r"인 경우 적용',
  },
  {
    name: '--upcast-layout-float-top',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '화면 상단 기준 위치 지정 - startDirection이 "t"인 경우 적용',
  },
  {
    name: '--upcast-layout-float-bottom',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '화면 하단 기준 위치 지정 - startDirection이 "b"인 경우 적용',
  },
];
export { cssVar };
