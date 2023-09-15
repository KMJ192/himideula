import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-layout-stack-gap',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '스택 자식 요소 사이 공간 지정',
  },
];
export { cssVar };
