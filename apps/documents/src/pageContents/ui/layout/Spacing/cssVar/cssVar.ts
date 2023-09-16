import { CSS_VAR_TYPE } from '@src/components/UIDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/pageContents/uiDocs/state';

const cssVar: Array<CSSVar> = [
  {
    name: '--upcast-layout-spacing-gap',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '사이 공간 지정',
  },
];
export { cssVar };
